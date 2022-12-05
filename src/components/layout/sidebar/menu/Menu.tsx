import { FC } from 'react';

import MenuItem from '@/components/layout/sidebar/menu/menu-item/MenuItem';
import { IMenuItem } from '@/components/layout/sidebar/menu/menu.interface';

import styles from './Menu.module.scss';

interface IMenu {
	title: string;
	items: IMenuItem[];
}
const Menu: FC<IMenu> = ({ title, items }) => {
	return (
		<nav className={styles.block}>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.list}>
				{items.map(el => (
					<MenuItem item={el} key={el.link} />
				))}
			</ul>
		</nav>
	);
};

export default Menu;
