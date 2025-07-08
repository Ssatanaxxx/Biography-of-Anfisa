import { useQuery } from '@tanstack/react-query';
import { BlogSchema } from "../../api/Blog";
import { Blog } from "./Blog";
// import { queryClient } from '../../api/queryClient';
import db from "../../../db.json";

const fetchBlogs = async () => {
    // В реальном приложении здесь будет fetch запрос
    const result = BlogSchema.array().safeParse(db.Blog);
    if (!result.success) {
        throw new Error('Invalid blog data format');
    }
    return result.data;
};

export const BlogLoader = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['blogs'],
        queryFn: fetchBlogs,
        initialData: () => {
            const result = BlogSchema.array().safeParse(db.Blog);
            return result.success ? result.data : undefined;
        }
    });

    if (isLoading) return <div>Загрузка блогов...</div>;
    if (error) return <div>Ошибка загрузки: {error.message}</div>;
    if (!data) return <div>Нет данных</div>;

    return <Blog blogs={data} />;
};