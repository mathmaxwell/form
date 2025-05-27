import React from 'react'
import { FieldType, One } from 'react-declarative'
import Button from '@mui/material/Button'
import pb from '../lib/pocketbase'
import { Container } from '@mui/material'
const ClientForm = () => {
	interface IClientFormProps {
		FIO: string
		gender: 'мужской' | 'женский' | ''
		seria: string
		placeBorn: string
		dataBorn: string
		FINFL: number
		passportIssued: string
		dateOfIssued: string
		expirationDate: string
		nationality: string
		email: string
		phone: number
		departament: string
		job: string
		image: File
	}
	const fields = [
		{
			type: FieldType.Typography,
			typovarient: 'h4',
			placeholder: 'Добавить сотрудника',
		},
		{
			type: FieldType.Paper,
			children: 'photo',
			desktopColumns: 3,
			fields: [
				{
					type: FieldType.Component, //картинка не отправляется
					name: 'image',
					required: true,
					element: (props: { onChange: (val: File) => void }) => (
						<input
							type='file'
							accept='image/*'
							style={{
								width: '200px',
								height: '250px',
								backgroundColor: 'red',
							}}
							onChange={e => {
								const file = e.target.files?.[0]
								if (file) {
									props.onChange({ file } as unknown as File)
									const reader = new FileReader()
									reader.onload = function () {
										const base64 = reader.result?.toString().split(',')[1]
										console.log(base64)
									}
									reader.readAsDataURL(file)
								}
							}}
						/>
					),
				},
			],
		},
		{
			type: FieldType.Paper,
			desktopColumns: 9,
			children: 'ФИО',
			fields: [
				{
					type: FieldType.Text,

					desktopColumns: 12,
					name: 'FIO',
					label: 'F I O',
					placeholder: 'Введите полное имя',
					required: true,
				},
				{
					type: FieldType.Combo,
					desktopColumns: 4,
					itemList: ['женский', 'мужской'],
					name: 'gender',
					placeholder: 'Выберите пол',
					label: 'Пол',
					required: true,
				},
				{
					type: FieldType.Text,
					desktopColumns: 8,
					outline: 'none',
					name: 'seria',
					label: 'Серия паспорта',
					placeholder: 'Введите серию паспорта',
					required: true,
				},
				{
					type: FieldType.Text,
					name: 'placeBorn',
					desktopColumns: 4,
					label: 'Место рождения',
					placeholder: 'Введите место рождения',
					required: true,
				},
				{
					type: FieldType.Text,
					name: 'dataBorn',
					desktopColumns: 8,
					label: 'Дата рождения',
					placeholder: 'Введите дату рождения',
					required: true,
				},
				{
					type: FieldType.Text,
					name: 'FINFL',
					label: 'Финансовый номер',
					placeholder: 'Введите финансовый номер',
					required: true,
				},
			],
		},

		{
			type: FieldType.Paper,
			children: 'Регистрация',
			fields: [
				{
					type: FieldType.Text,
					name: 'passportIssued',
					label: 'Паспорт выдан',
					placeholder: 'Введите место выдачи паспорта',
					required: true,
				},
				{
					type: FieldType.Text,
					name: 'dateOfIssued',
					label: 'Дата истечения срока паспорта',
					placeholder: 'Введите дату истечения срока паспорта',
					required: true,
				},
				{
					type: FieldType.Text,
					name: 'expirationDate',
					label: 'Дата истечения срока действия',
					placeholder: 'Введите дату истечения срока действия',
					required: true,
				},
				{
					type: FieldType.Text,
					name: 'nationality',
					label: 'Гражданство',
					placeholder: 'Введите гражданство',
					required: true,
				},
				{
					type: FieldType.Text,
					name: 'email',
					label: 'Email',
					placeholder: 'Введите email',
					required: true,
				},
				{
					type: FieldType.Text,
					name: 'phone',
					label: 'Телефон',
					placeholder: 'Введите телефон',
					required: true,
				},
				{
					type: FieldType.Text,
					name: 'departament',
					label: 'Отдел',
					placeholder: 'Введите отдел',
					required: true,
				},
				{
					type: FieldType.Text,
					name: 'job',
					label: 'Должность',
					placeholder: 'Введите должность',
					required: true,
				},
			],
		},
	]

	const [form, setForm] = React.useState<IClientFormProps>({
		FIO: '',
		gender: '',
		seria: '',
		placeBorn: '',
		dataBorn: '',
		FINFL: 0,
		passportIssued: '',
		dateOfIssued: '',
		expirationDate: '',
		nationality: '',
		email: '',
		phone: 0,
		departament: '',
		job: '',
		image: new File([], ''),
	})
	async function handleSubmit(data: IClientFormProps) {
		const formData = new FormData()
		formData.append('FIO', data.FIO)
		formData.append('gender', data.gender)
		formData.append('seria', data.seria)
		formData.append('placeBorn', data.placeBorn)
		formData.append('dataBorn', data.dataBorn)
		formData.append('FINFL', data.FINFL.toString())
		formData.append('passportIssued', data.passportIssued)
		formData.append('dateOfIssued', data.dateOfIssued)
		formData.append('expirationDate', data.expirationDate)
		formData.append('nationality', data.nationality)
		formData.append('email', data.email)
		formData.append('phone', data.phone.toString())
		formData.append('departament', data.departament)
		formData.append('job', data.job)

		if (data.image && data.image.name) {
			formData.append('image', data.image)
			console.log('Файл добавлен:', data.image)
		} else {
			console.warn('⚠️ Нет изображения')
		}

		for (const [key, val] of formData.entries()) {
			console.log(`🧾 ${key}:`, val)
		}

		// отправка
		try {
			const result = await pb.collection('employees').create(formData)
			console.log('✅ Успешно отправлено:', result)
		} catch (err) {
			console.error('❌ Ошибка при отправке:', err)
		}
	}

	return (
		<Container>
			<One
				onChange={(data: IClientFormProps, initial) => {
					if (initial) {
						return
					}
					setForm(data)
				}}
				fields={fields}
			/>
			<Button onClick={() => handleSubmit(form)}>click</Button>
		</Container>
	)
}

export default ClientForm
