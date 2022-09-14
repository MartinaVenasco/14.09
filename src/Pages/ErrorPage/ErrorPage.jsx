import styles from './index.module.scss'

const ErrorPage = (props) => {
	return props.status === 404 ? 'Pagina non trovata' : 'Error!!';
  };
  export default ErrorPage