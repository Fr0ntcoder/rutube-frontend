import { FC } from 'react';

import AuthForm from '@/components/layout/header/auth-form/AuthForm';
import ProfileMenu from '@/components/layout/header/profile-menu/ProfileMenu';
import Search from '@/components/layout/header/search/Search';
import UploadVideo from '@/components/layout/header/upload-video/UploadVideo';

import { useAuth } from '@/hooks/userAuth';

import styles from './Header.module.scss';

const Header: FC = () => {
	const { user } = useAuth();
	return (
		<header className={styles.header}>
			<Search />
			{user ? (
				<>
					<ProfileMenu />
					<UploadVideo />
				</>
			) : (
				<AuthForm />
			)}
		</header>
	);
};

export default Header;
