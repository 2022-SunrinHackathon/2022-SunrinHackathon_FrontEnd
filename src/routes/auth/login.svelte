<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';

	let password: string | null = '';
	let id: string | null = '';
	let user_list: string[] = ['wugusaud77', 'iamraram'];
	const login = () => {
		alert(`${id} / ${password}`);
	}
</script>

<div class="container">
	<div class="signup_wrapper">
		<a href="/">
			<img src="/images/logo.svg" alt="" class="logo" in:fly={{ x: -50, duration: 1000 }} />
		</a>

		<br />

		<div class="signup_input_box_v2" in:fly={{ x: -25, duration: 1000 }}>
			<div class="signup_input_v2">
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
					name="id"
					class="signup_input"
					placeholder="아이디를 입력해주세요"
					bind:value={id}
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
						<path id="패스_121" data-name="패스 121" d="M0,0H24V24H0Z" fill="none" opacity="0.87" />
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
					name="passwordConfirm"
					class="signup_input"
					placeholder="비밀번호를 입력해주세요"
					bind:value={password}
				/>
			</div>
		</div>
		<div class="button_group">
			<a sveltekit:prefetch href="/auth/signup">
				<div class="signup_button" in:fly={{ x: -25, duration: 1000 }}>회원가입</div>
			</a>
			<button
				type="button"
				class="signin_button"
				on:click|preventDefault={() => login(id,password)}
				in:fly={{ x: -25, duration: 1000 }}
			>
				로그인
			</button>
		</div>
		<div class="alert_message">
			<a href="/" class="underline"> 아이디 또는 비밀번호를 잊었냐 씨발련아</a>
		</div>
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
			.signup_input_box_v2 {
				position: relative;
				display: flex;
				background-color: #f8f8f8;
				border: 1px solid rgb(220, 220, 220);
				width: 332px;
				padding: 16px;
				border-radius: 16px;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				.line {
					border-bottom: 1px solid rgb(220, 220, 220);
					position: relative;
					width: 320px;
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
			.button_group {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				width: 364px;
				.signin_button {
					width: 176px;
					padding-top: 16px;
					padding-bottom: 16px;
					font-size: 17px;
					border-radius: 15px;
					margin-top: 20px;
					border: none;
					background-color: #4b87fe;
					border: 1px solid #4b87fe;
					color: white;
					text-align: center;
					&:hover {
						cursor: pointer;
						background-color: #3d6ed1;
					}
				}
				a {
					text-decoration: none;
					color: rgb(180, 180, 180);
					&:visited {
						color: rgb(180, 180, 180);
					}
					.signup_button {
						width: 176px;
						padding-top: 16px;
						padding-bottom: 16px;
						font-size: 17px;
						border-radius: 15px;
						margin-top: 20px;
						border: none;
						background-color: #f7f7f7;
						color: rgb(180, 180, 180);
						text-align: center;
						border: 1px solid rgb(220, 220, 220);
						&:hover {
							cursor: pointer;
							background-color: #e6e6e6;
						}
					}
				}
			}

			.alert_message {
				margin-top: 30px;
				a {
					text-decoration: none;
					color: #4287f5;
					text-align: center;
					&:visited {
						color: #4287f5;
					}
				}
			}
		}
	}

	.logo {
		width: 250px;
		text-align: center;
		display: inline-block;
		margin-bottom: 50px;
	}

	input:focus {
		outline: none;
	}

	input::placeholder {
		color: rgb(180, 180, 180);
		letter-spacing: 0px !important;
	}
	img {
		z-index: 9999;
	}
</style>
