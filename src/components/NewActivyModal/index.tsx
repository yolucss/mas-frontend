import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import {FiX} from 'react-icons/fi'
import {Container, Error} from './styles';

interface NewActivyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewActivyModalData {
    courseunit: string;
    activy: string;
    date: Date;
}

export function NewActivyModal({isOpen,onRequestClose}:NewActivyModalProps){

    const {register, handleSubmit, formState: {errors}} = useForm<NewActivyModalData>()

    const onSubimt = handleSubmit(data => alert(JSON.stringify(data)))

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Atividade</h2>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FiX size={20}/>
                </button>
                <form onSubmit={onSubimt}>
                    <input 
                        type="text"
                        placeholder="Unidade Curricular"
                        {...register("courseunit", {required:true})} 
                    />
                    {errors.courseunit && <Error>O preenchimento do campo é obrigatório</Error>}
                    <input 
                        type="text"
                        placeholder="Atividade"
                        {...register("activy", {required:true})} 
                    />
                    {errors.activy && <Error>O preenchimento do campo é obrigatório</Error>}
                    <input 
                        type="date"
                        placeholder="Data da atividade"
                        {...register("date", {required:true})} 
                    />
                    {errors.date && <Error>O preenchimento do campo é obrigatório</Error>}
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Container>
        </Modal>
    )
}
