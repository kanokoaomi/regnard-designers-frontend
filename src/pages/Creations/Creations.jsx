import Section from '../../components/Section/Section'
import CreationsList from '../../components/CreationsList/CreationsList'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllPictures } from '../../redux/jewellery/jewelleryOperations';
import Container from '../../components/Container/Container';
// import { selectPictures } from '../../redux/jewellery/jewellerySelectors';

const Creations = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPictures());
    }, [dispatch]);

    return (
        <Container>
            <Section>
                <CreationsList />
            </Section>
        </Container>
    )
}

export default Creations