import React from 'react';
import { useRouter } from 'next/router';
import Menu from '../components/Menu';

const IndexPage: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/home');
  }, []);

  return (
    <div>
      <Menu />
    </div>
  );
};

export default IndexPage;