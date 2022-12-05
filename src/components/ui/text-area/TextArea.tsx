import { FC, forwardRef } from 'react';

import { ITextArea } from '@/components/ui/text-area/text-area.interface';

import styles from './TextArea.module.scss';

const TextArea: FC = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ error, style, ...rest }, ref) => {
		return (
			<div className={styles['editor']} style={style}>
				<textarea ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

export default TextArea;
