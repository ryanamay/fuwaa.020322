import '../../styles/tailwind.css'
import '../styles/main.css'
import '../styles/stylesheet.css'
import TransitionLayout  from '../components/TransitionLayout';

function MyApp({ Component, pageProps }) {
  return <TransitionLayout>
    <Component {...pageProps} />
  </TransitionLayout>
}

export default MyApp