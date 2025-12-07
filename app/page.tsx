import Signin from '@/components/signin';
import Spline from './spline/page';
import Navbar from '@/components/navbar';

export default function Home() {

  return (
    <main>
      <Navbar />
      <Spline />
      <Signin />
    </main>
  );
}

