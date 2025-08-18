import ClientWorkDetail from './ClientWorkDetail';
import { worksData } from '@/lib/data';

export async function generateStaticParams() {
    return worksData.map((work) => ({
        id: work.id.toString(),
    }));
}

type WorkDetailPageProps = {
    params: { id: string };
};

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
    return <ClientWorkDetail id={params.id} />;
}
