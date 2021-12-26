<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	const year_data: number[] = [2004, 2005, 2006];
	const month_data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const days_data: number[] = [1, 2, 3];

	const department_data = ['소프트웨어과', '콘텐츠디자인과', '정보보호과', 'IT경영과'];

	const reg: RegExp = /^([\w-]+(?:\.[\w-]+)*)@sunrin.hs.kr/;
	let email: string | null = '';
	let result: string | null = '';
	let error: string | null = '';
	let password: string | null = '';
	let passwordConfirm: string | null = '';
	let nickname: string | null = '';
	let user_list: string[] = ['wugusaud77', 'iamraram'];
	let verifyCode: string | null = '';

	const validateEmail = (email: string): boolean => reg.test(email);

	let codeVisible: boolean = true;
	let emailVisible: boolean = true;
	const onCheck = (
		emailAdress: string,
		password: string,
		passwordConfirm: string,
		username: string
	) => {
		if (emailAdress === '' || password === '' || passwordConfirm === '' || username === '') {
			error = '빈칸이 있습니다.';
		} else if (!validateEmail(emailAdress)) {
			error =
				'올바른 이메일 주소를 입력하세요. 선린인터넷고 이메일 형식은 XXXX@sunrin.hs.kr입니다.';
		} else if (password != passwordConfirm) {
			error = '입력한 두 비밀번호가 다릅니다.<br>다시 한 번 확인해주세요.';
		} else if (user_list.includes(username)) {
			error = '이미 있는 닉네임입니다.<br>다른 닉네임을 사용해주세요.';
		} else {
			setEmailVisible();
		}
	};

	const emailCheck = (emailAdress: string) => {
		if (!validateEmail(emailAdress)) {
			error =
				'올바른 이메일 주소를 입력하세요. <br>선린인터넷고 이메일 형식은 XXXX@sunrin.hs.kr입니다.';
			result = '';
			setTimeout(function () {
				error = '';
			}, 3000);
		} else {
			result = '인증코드를 발송하였습니다. 이메일을 확인해주세요';
			error = '';
			setEmailVisible();
			setTimeout(function () {
				result = '';
			}, 3000);
		}
	};

	const codeCheck = (verifyCode: string) => {
		if (verifyCode !== '3044') {
			error = '인증에 실패하였습니다. 코드를 다시 한번 입력해보세요';
			result = '';
			setTimeout(function () {
				error = '';
			}, 3000);
		} else {
			error = '';
			result = '인증에 성공하였습니다. 새로운 회원이 되기 위해서<br>다음 정보를 입력해주세요.';
			setTimeout(function () {
				result = '';
			}, 3000);
			setCodeVisible();
		}
	};

	const setEmailVisible = () => (emailVisible = !emailVisible);
	const setCodeVisible = () => (codeVisible = !codeVisible);
	import { fly, fade } from 'svelte/transition';
</script>

<div class="container">
	<div class="signup_wrapper">
		{#if error != ''}
			<div class="error_message" in:fade out:fade>
				<img src="/images/error.svg" alt="" />

				<span>{@html error}</span>
			</div>
		{/if}
		{#if result != ''}
			<div class="result_message" in:fade out:fade>
				<img src="/images/check.svg" alt="" />

				<span>{@html result}</span>
			</div>
		{/if}
		<a href="/">
			<img src="/images/logo.svg" alt="" class="logo" in:fly={{ x: -50, duration: 1000 }} />
		</a>
		<br />
		{#if emailVisible}
			<div class="signup_input_box" in:fly={{ x: -25, duration: 1000 }}>
				<svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="19.5" viewBox="0 0 21.5 19.5">
					<path
						id="Combined_Shape"
						data-name="Combined Shape"
						d="M15.659,19.5H5.822a5.526,5.526,0,0,1-3.985-1.62A6.544,6.544,0,0,1,0,13.188V6.32C0,2.717,2.511,0,5.841,0h9.818C18.989,0,21.5,2.717,21.5,6.32v6.868a6.547,6.547,0,0,1-1.837,4.693,5.529,5.529,0,0,1-3.988,1.62Zm.009-1.5h.007A4.049,4.049,0,0,0,18.6,16.817a5.051,5.051,0,0,0,1.4-3.63V6.32c0-2.793-1.825-4.82-4.341-4.82H5.841C3.326,1.5,1.5,3.527,1.5,6.32v6.868a5.054,5.054,0,0,0,1.4,3.63A4.049,4.049,0,0,0,5.825,18h9.838ZM8.883,10.8,4.4,7.186a.75.75,0,1,1,.94-1.168L9.82,9.63a1.545,1.545,0,0,0,1.923,0L16.179,6.02a.75.75,0,1,1,.947,1.164L12.682,10.8a3.04,3.04,0,0,1-3.8.006Z"
						fill="rgb(180, 180, 180)"
					/>
				</svg>
				<input
					type="text"
					name="mail"
					class="signup_input"
					placeholder="학교 메일 주소를 입력해주세요"
					bind:value={email}
				/>
			</div>
			<button
				type="button"
				class="signin_button"
				on:click|preventDefault={() => emailCheck(email)}
				in:fly={{ x: -25, duration: 1000 }}
			>
				인증코드 발송
			</button>

			<script>
				if (window.event.keyCode == 13) {
					emailCheck(email);
				}
			</script>

			<div class="alert_message">
				※ 학교 메일 주소를 사용하셔야 합니다. <br />
				<a href="/" class="underline"> 여기</a>를 클릭하여 학교 메일을 개설해주세요.
			</div>
		{:else if codeVisible}
			<div class="signup_input_box" in:fly={{ x: -25, duration: 1000 }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					enable-background="new 0 0 24 24"
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
					fill="rgb(180, 180, 180)"
					><g><rect fill="none" height="24" width="24" /></g><g
						><path
							d="M21,10h-8.35C11.83,7.67,9.61,6,7,6c-3.31,0-6,2.69-6,6s2.69,6,6,6c2.61,0,4.83-1.67,5.65-4H13l2,2l2-2l2,2l4-4.04L21,10z M7,15c-1.65,0-3-1.35-3-3c0-1.65,1.35-3,3-3s3,1.35,3,3C10,13.65,8.65,15,7,15z"
						/></g
					></svg
				>
				<input
					type="text"
					name="mail"
					class="signup_input"
					placeholder="인증코드를 적어주세요."
					bind:value={verifyCode}
				/>
			</div>
			<button
				type="button"
				class="signin_button"
				on:click|preventDefault={() => codeCheck(verifyCode)}
				in:fly={{ x: -25, duration: 1000 }}
			>
				확인
			</button>

			<div class="alert_message">
				※ 혹시라도 메일이 안오셨나요? <br />
				<a href="/" class="underline"> 여기</a>를 클릭하여 재전송해보세요!
			</div>
		{:else}
			<div class="signup_input_box" in:fly={{ x: -25, duration: 1000 }}>
				<svg
					id="그룹_3"
					data-name="그룹 3"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path
						id="패스_107"
						data-name="패스 107"
						d="M487.727,487.841h24v24h-24Z"
						transform="translate(-487.727 -487.841)"
						fill="none"
					/>
					<path
						id="패스_108"
						data-name="패스 108"
						d="M500.653,493.961a2.346,2.346,0,1,1-2.128,1.324,2.292,2.292,0,0,1,2.128-1.324h0m0,10.042c3.314,0,6.807,1.629,6.807,2.343v1.227H493.847v-1.227c0-.714,3.492-2.343,6.806-2.343m0-12.162a4.463,4.463,0,1,0,4.463,4.463A4.463,4.463,0,0,0,500.653,491.841Zm0,10.042c-2.979,0-8.926,1.5-8.926,4.463v2.059a1.289,1.289,0,0,0,1.289,1.289h15.277a1.288,1.288,0,0,0,1.288-1.289v-2.059C509.58,503.379,503.633,501.883,500.653,501.883Z"
						transform="translate(-488.654 -488.768)"
						fill="#9f9f9f"
					/>
				</svg>

				<input
					type="text"
					name="nickname"
					class="signup_input"
					placeholder="별명을 적어주세요"
					bind:value={nickname}
				/>
			</div>
			<br />
			<div class="signup_input_box_v2" in:fly={{ x: -25, duration: 1000 }}>
				<div class="signup_input_v2">
					<svg
						id="lock_black_24dp"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<g id="그룹_25" data-name="그룹 25">
							<path id="패스_120" data-name="패스 120" d="M0,0H24V24H0Z" fill="none" />
							<path
								id="패스_121"
								data-name="패스 121"
								d="M0,0H24V24H0Z"
								fill="none"
								opacity="0.87"
							/>
						</g>
						<path
							id="패스_122"
							data-name="패스 122"
							d="M18,8H17V6A5,5,0,0,0,7,6V8H6a2.006,2.006,0,0,0-2,2V20a2.006,2.006,0,0,0,2,2H18a2.006,2.006,0,0,0,2-2V10A2.006,2.006,0,0,0,18,8ZM9,6a3,3,0,0,1,6,0V8H9Zm9,14H6V10H18Zm-6-3a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,17Z"
							transform="translate(0 0)"
							fill="#9f9f9f"
						/>
					</svg>

					<input
						type="password"
						name="password"
						class="signup_input"
						placeholder="비밀번호"
						bind:value={password}
					/>
				</div>
				<div class="line" />
				<div class="signup_input_v2">
					<svg
						id="lock_black_24dp"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<g id="그룹_25" data-name="그룹 25">
							<path id="패스_120" data-name="패스 120" d="M0,0H24V24H0Z" fill="none" />
							<path
								id="패스_121"
								data-name="패스 121"
								d="M0,0H24V24H0Z"
								fill="none"
								opacity="0.87"
							/>
						</g>
						<path
							id="패스_122"
							data-name="패스 122"
							d="M18,8H17V6A5,5,0,0,0,7,6V8H6a2.006,2.006,0,0,0-2,2V20a2.006,2.006,0,0,0,2,2H18a2.006,2.006,0,0,0,2-2V10A2.006,2.006,0,0,0,18,8ZM9,6a3,3,0,0,1,6,0V8H9Zm9,14H6V10H18Zm-6-3a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,17Z"
							transform="translate(0 0)"
							fill="#F8F8F8"
						/>
					</svg>

					<input
						type="password"
						name="passwordConfirm"
						class="signup_input"
						placeholder="비밀번호 확인"
						bind:value={passwordConfirm}
					/>
				</div>
			</div>
			<!-- <div class="label_second_form">생년월일</div>
			<div class="date_input_box">
				<select name="year" class="signin_4 login_input form2_birth">
					{#each year_data as item}
						<option>
							{item + '년'}
						</option>
					{/each}
				</select>

				<select name="month" class="signin_5 login_input form2_birth">
					{#each month_data as item}
						<option>
							{item + '월'}
						</option>
					{/each}
				</select>

				<select name="days" class="signin_6 login_input form2_birth">
					{#each days_data as item}
						<option>
							{item + '일'}
						</option>
					{/each}
				</select>
			</div>

			<br />

			<div class="label_second_form">이름</div>

			<input type="text" name="days" class="signin_7 login_input" />

			<div class="label_second_form">학과</div>

			<select name="days" class="signin_7 login_input">
				{#each department_data as item}
					<option>
						{item}
					</option>
				{/each}
			</select>

			<br />

			<div class="alert_black personal">
				<a href="/"> 여기</a>를 클릭하여 <a href="/">개인정보 이용약관</a>을 참고하세요.
			</div>

			<div class="alert_black personal">
				<img src="/images/signup_check_body.svg" class="personal_body" alt="" />
				<img src="/images/signup_check_child.svg" class="personal_child" alt="" />
				개인정보 이용 약관에 동의합니다.
			</div> -->

			<button
				type="button"
				class="signin_button"
				on:click|preventDefault={() => codeCheck(verifyCode)}
				in:fly={{ x: -25, duration: 1000 }}
			>
				다음
			</button>
		{/if}
	</div>
</div>

<style lang="scss">
	.container {
		font-family: 'Pretendard';
		font-weight: 500;
		width: 100%;
		height: 100%;

		display: flex;
		position: relative;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.signup_wrapper {
			width: 512px;
			height: 600px;
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.error_message {
				position: relative;
				width: 400px;
				background: #fae1e1;
				border-radius: 20px;
				color: #e74f4f;
				text-align: center;
				padding: 15px;
				margin-bottom: 30px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				img {
					padding-left: 10px;
					padding-right: 17px;
				}
				span {
					display: inline-block;
					word-wrap: normal;
					word-break: keep-all;
					text-align: start;
					line-height: 20px;
					padding-right: 15px;
					white-space: nowrap;
					font-size: 15px;
				}
			}
			.result_message {
				position: relative;
				width: 370px;
				background: #cefae0;
				border-radius: 20px;
				color: #44b16f;
				text-align: center;
				padding: 15px;
				margin-bottom: 30px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				img {
					padding-left: 10px;
					padding-right: 10px;
				}
				span {
					display: inline-block;
					word-wrap: normal;
					word-break: keep-all;
					text-align: start;
					line-height: 20px;
					padding-right: 15px;
					white-space: nowrap;
					font-size: 15px;
				}
			}

			.signup_input_box {
				position: relative;
				display: flex;
				background-color: #f8f8f8;
				border: 1px solid rgb(220, 220, 220);
				width: 318px;
				padding: 16px;

				border-radius: 16px;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				.signup_input {
					width: 280px;
					border: none;
					background: none;
					font-size: 17px;
				}
			}
			.signup_input_box_v2 {
				position: relative;
				display: flex;
				background-color: #f8f8f8;
				border: 1px solid rgb(220, 220, 220);
				width: 318px;
				padding: 16px;
				border-radius: 16px;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				.line {
					border-bottom: 1px solid rgb(220, 220, 220);
					position: relative;
					width: 280px;
					margin-left: 30px;
					margin-top: 12px;
					margin-bottom: 15px;
				}
				.signup_input_v2 {
					position: relative;
					display: flex;
					background: none;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					background: none;
					font-size: 17px;
					.signup_input {
						width: 280px;
						border: none;
						background: none;
						font-size: 17px;
						margin-left: 12px;
					}
				}
			}
			.signin_button {
				width: 350px;
				padding-top: 16px;
				padding-bottom: 16px;
				font-size: 17px;
				border-radius: 15px;
				margin-top: 20px;
				border: none;
				background-color: #4b87fe;
				color: white;
				text-align: center;
				&:hover {
					cursor: pointer;
					background-color: #3d6ed1;
				}
			}
			.alert_message {
				margin-top: 30px;
				color: #363636;
				text-align: center;
			}
		}
	}



	a {
		color: #4b87fe;
		text-decoration: none;
	}

	.logo {
		width: 250px;
		text-align: center;
		display: inline-block;
		margin-bottom: 40px;
	}

	input:focus {
		outline: none;
	}

	input::placeholder {
		color: rgb(180, 180, 180);
	}


	.underline {
		text-decoration: underline;
	}
</style>
