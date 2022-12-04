import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { IMenuItem } from '@/components/layout/sidebar/menu/menu.interface';

import { useAuth } from '@/hooks/userAuth';

import styles from './MenuItem.module.scss';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { user } = useAuth();
	const { asPath } = useRouter();

	if (item.link === '/my-channel') {
		if (!user) return null;
		else item.link = `/c/${user?.id}`;
	}
	return (
		<li className={styles.item}>
			<Link
				href={item.link}
				className={classNames(styles.link, {
					[styles.active]: asPath === item.link
				})}
			>
				<span className={classNames(styles.icon)}>
					{item.icon && <item.icon />}
				</span>
				<span className={styles.text}>{item.title}</span>
			</Link>
		</li>
	);
};

export default MenuItem;
