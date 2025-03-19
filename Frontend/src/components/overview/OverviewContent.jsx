import Row from './Row';
import { useOverview } from './useOverview';

function OverviewContent() {
    const { data, isPending } = useOverview();
    if (isPending) return <h1>loading</h1>;
    return (
        <div className="container">
            <div className="cards-container">
                {data.map((item) => (
                    <Row key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default OverviewContent;
