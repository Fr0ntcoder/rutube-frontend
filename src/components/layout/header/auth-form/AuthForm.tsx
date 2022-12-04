import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaUserCircle } from 'react-icons/fa';

import { IAuthFields } from '@/components/layout/header/auth-form/auth-form.interface';
import { validEmail } from '@/components/layout/header/auth-form/auth.valid';
import Field from '@/components/ui/field/Field';

import { useOutside } from '@/hooks/useOutside';

import styles from './AuthForm.module.scss';

const AuthForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false);
	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange'
	});

	const onSubmit: SubmitHandler<IAuthFields> = data => {};
	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={styles.btn} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle fill='#A4A4A4' />
			</button>
			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							pattern: {
								value: validEmail,
								message: 'Не валидный E-mail'
							}
						})}
						placeholder='Email'
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'Пароль обязятелен',
							minLength: {
								value: 6,
								message: 'Мин. длина пароля - 6 символов'
							}
						})}
						placeholder='Пароль'
						error={errors.password}
						type='password'
					/>
					<div className={styles.bottom}>
						<button className={styles.login} onClick={() => setType('login')}>
							Войти
						</button>
						<button
							className={styles.register}
							onClick={() => setType('register')}
						>
							Регистрация
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default AuthForm;
