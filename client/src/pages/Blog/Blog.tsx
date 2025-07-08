import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BlogItem } from "../../api/Blog";
import { validateResponse } from '../../api/validateResponse';

interface BlogProps {
    blogs: BlogItem[];
}

export const Blog = ({ blogs: initialBlogs }: BlogProps) => {
    const queryClient = useQueryClient();
    const [activeCommentId, setActiveCommentId] = useState<number | null>(null);
    const [commentText, setCommentText] = useState('');

    const likeMutation = useMutation({
        mutationFn: async (blogId: number) => {
            const response = await fetch('/api/like', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ blogId }),
            });
            return validateResponse(response);
        },
        onMutate: async (blogId) => {
            await queryClient.cancelQueries({ queryKey: ['blogs'] });

            const previousBlogs = queryClient.getQueryData<BlogItem[]>(['blogs']);

            queryClient.setQueryData<BlogItem[]>(['blogs'], (old) =>
                old?.map(blog =>
                    blog.id === blogId ? { ...blog, likes: blog.likes + 1 } : blog
                ) || []
            );

            return { previousBlogs };
        },
        onError: (err, blogId, context) => {
            queryClient.setQueryData(['blogs'], context?.previousBlogs);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
        }
    });

    const commentMutation = useMutation({
        mutationFn: async ({ blogId, text }: { blogId: number; text: string }) => {
            const response = await fetch('/api/comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ blogId, text }),
            });
            return validateResponse(response);
        },
        onMutate: async ({ blogId }) => {
            await queryClient.cancelQueries({ queryKey: ['blogs'] });

            const previousBlogs = queryClient.getQueryData<BlogItem[]>(['blogs']);

            queryClient.setQueryData<BlogItem[]>(['blogs'], (old) =>
                old?.map(blog =>
                    blog.id === blogId ? { ...blog, comments: blog.comments + 1 } : blog
                ) || []
            );

            return { previousBlogs };
        },
        onSuccess: () => {
            setCommentText('');
            setActiveCommentId(null);
        },
        onError: (err, variables, context) => {
            queryClient.setQueryData(['blogs'], context?.previousBlogs);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
        }
    });

    const handleLike = (blogId: number) => {
        likeMutation.mutate(blogId);
    };

    const handleCommentClick = (blogId: number) => {
        setActiveCommentId(activeCommentId === blogId ? null : blogId);
    };

    const submitComment = (blogId: number) => {
        if (!commentText.trim()) return;
        commentMutation.mutate({ blogId, text: commentText });
    };

    const getCategoryClass = (category: string): string => {
        const categoryClasses: Record<string, string> = {
            "Наука": "science",
            "Гастрономия": "food",
            "Рекорды": "records"
        };
        return categoryClasses[category] || 'default';
    };

    return (
        <div className="blog-container">
            <h2 className="section-title">
                <span className="paw-decor left-paw">🐾</span>
                Мой дневник
                <span className="paw-decor right-paw">🐾</span>
            </h2>

            <div className="blog-timeline">
                {initialBlogs.map((blog) => (
                    <div className="blog-post" key={blog.id}>
                        <div className="post-header">
                            <div className="post-date">{blog.data}</div>
                            <div className={`post-category ${getCategoryClass(blog.category)}`}>
                                {blog.category}
                            </div>
                        </div>
                        <h3 className="post-title">{blog.title}</h3>
                        <p className="post-content">{blog.description}</p>

                        <div className="post-footer">
                            <div className="post-tags">
                                {blog.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="post-reactions">
                                <button
                                    className="reaction like-btn"
                                    onClick={() => handleLike(blog.id)}
                                    disabled={likeMutation.isPending}
                                >
                                    😼 {blog.likes}
                                    {likeMutation.isPending && blog.id === likeMutation.variables && '...'}
                                </button>
                                <button
                                    className="reaction comment-btn"
                                    onClick={() => handleCommentClick(blog.id)}
                                    disabled={commentMutation.isPending}
                                >
                                    💬 {blog.comments}
                                </button>
                            </div>
                        </div>

                        {activeCommentId === blog.id && (
                            <div className="comment-section">
                                <textarea
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                    placeholder="Ваш комментарий..."
                                    className="comment-input"
                                    disabled={commentMutation.isPending}
                                />
                                <button
                                    onClick={() => submitComment(blog.id)}
                                    className="comment-submit-btn"
                                    disabled={commentMutation.isPending || !commentText.trim()}
                                >
                                    {commentMutation.isPending ? 'Отправка...' : 'Отправить'}
                                </button>
                                {commentMutation.isError && (
                                    <div className="error-message">
                                        Ошибка: {commentMutation.error.message}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};