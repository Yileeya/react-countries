import {useParams} from 'react-router-dom';

function DetailPage() {
    const {countryName} = useParams();

    return (
        <div>
            detail page: {countryName}
        </div>
    );
}

export default DetailPage;