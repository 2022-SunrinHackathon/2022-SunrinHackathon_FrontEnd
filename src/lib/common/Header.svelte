<script lang="ts">
	import { page } from '$app/stores';
	export let user;
	let selected = $page.path.slice(1);
	let modal = false;

	const toggleModal = () => {
		modal = !modal;
	};
</script>

<header>
	<a href="/">
		<img src="/images/logo.svg" alt="" class="logo" />
	</a>

	<ul>
		<li>
			<a sveltekit:prefetch href="/home" class:selected={$page.path === '/home'}>
				<svg
					id="home_black_24dp"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
				>
					<path
						id="패스_163"
						data-name="패스 163"
						d="M12.4,24.218V17.552h5.333v6.667a1.337,1.337,0,0,0,1.333,1.333h4A1.337,1.337,0,0,0,24.4,24.218V14.885h2.267a.661.661,0,0,0,.44-1.16L15.959,3.685a1.344,1.344,0,0,0-1.787,0L3.026,13.725a.664.664,0,0,0,.44,1.16H5.733v9.333a1.337,1.337,0,0,0,1.333,1.333h4A1.337,1.337,0,0,0,12.4,24.218Z"
						transform="translate(0.934 1.115)"
						fill="#c7c7c7"
					/>
				</svg>
				홈
			</a>
		</li>
		<li>
			<a sveltekit:prefetch href="/board" class:selected={$page.path === '/board'}>
				<svg
					id="article_black_24dp"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
				>
					<rect id="사각형_102" data-name="사각형 102" width="32" height="32" fill="none" />
					<path
						id="패스_159"
						data-name="패스 159"
						d="M22.556,3H5.444A2.452,2.452,0,0,0,3,5.444V22.556A2.452,2.452,0,0,0,5.444,25H22.556A2.452,2.452,0,0,0,25,22.556V5.444A2.452,2.452,0,0,0,22.556,3ZM15.222,20.111H9.111a1.222,1.222,0,1,1,0-2.444h6.111a1.222,1.222,0,1,1,0,2.444Zm3.667-4.889H9.111a1.222,1.222,0,0,1,0-2.444h9.778a1.222,1.222,0,0,1,0,2.444Zm0-4.889H9.111a1.222,1.222,0,1,1,0-2.444h9.778a1.222,1.222,0,0,1,0,2.444Z"
						transform="translate(2 2)"
						fill="#c7c7c7"
					/>
				</svg>

				게시판
			</a>
		</li>
		<li>
			<a sveltekit:prefetch href="/meal" class:selected={$page.path === '/meal'}>
				<svg
					id="restaurant_menu_black_24dp"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
				>
					<path
						id="패스_161"
						data-name="패스 161"
						d="M9.468,15.945l3.552-3.552L5.25,4.635a1.263,1.263,0,0,0-2.021.339A5.041,5.041,0,0,0,4.209,10.7Zm8.51-2.272c1.92.891,4.619.264,6.615-1.732,2.4-2.4,2.862-5.837,1.017-7.682s-5.272-1.381-7.682,1.017c-2,2-2.623,4.694-1.732,6.615L4.824,23.262a1.251,1.251,0,0,0,1.77,1.77l7.77-7.744,7.757,7.757a1.251,1.251,0,1,0,1.77-1.77l-7.757-7.757,1.845-1.845Z"
						transform="translate(1.26 1.728)"
						fill="#c7c7c7"
					/>
				</svg>
				급식
			</a>
		</li>
		<li>
			<a sveltekit:prefetch href="/schedule" class:selected={$page.path === '/schedule'}>
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
					<g id="그룹_101" data-name="그룹 101" transform="translate(-264)">
						<path
							id="Icon_metro-paragraph-left"
							data-name="Icon metro-paragraph-left"
							d="M2.571,3.856H23.936V6.914H2.571Zm0,4.586H15.924V11.5H2.571Zm0,9.173H15.924v3.058H2.571Zm0-4.586H23.936v3.058H2.571Zm0,9.173H23.936v3.058H2.571Z"
							transform="translate(266.43 1.442)"
							fill="#c7c7c7"
						/>
					</g>
				</svg>
				시간표
			</a>
		</li>
		<li>
			<a href="https://sunrinwiki.layer7.kr/">
				<svg
					id="book_black_24dp"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
				>
					<path
						id="패스_167"
						data-name="패스 167"
						d="M19.4,2H6.2A2.206,2.206,0,0,0,4,4.2V21.8A2.206,2.206,0,0,0,6.2,24H19.4a2.206,2.206,0,0,0,2.2-2.2V4.2A2.206,2.206,0,0,0,19.4,2ZM6.2,4.2h5.5V13L8.95,11.35,6.2,13Z"
						transform="translate(3.2 3)"
						fill="#c7c7c7"
					/>
				</svg>

				선린위키
			</a>
		</li>
	</ul>

	<div class="profile_box">
		{#if user != null}
			<div class="profile_info">
				<div class="name">주현명</div>
				<div class="profile_image" on:click={toggleModal} on:fly={{ y: -25, duration: 1000 }}>
					{#if modal}
						<div class="modal">
							<ul>
								<li>다크 모드</li>
								<li>설정</li>
								<li>계정 설정</li>
							</ul>
						</div>
					{/if}
				</div>
			</div>
			<img src="/images/bell.svg" alt="" />
		{:else}
			<div class="profile_info">
				<a sveltekit:prefetch href="/auth/login" class="lgnBtn">로그인</a>
			</div>
		{/if}
	</div>
</header>

<style lang="scss">
	.modal {
		position: absolute;
		top: 82px;
		width: 150px;
		height: 140px;
		background: white;
		border: 1px solid #eaeaea;
		border-radius: 15px;

		ul {
			padding: 0;
			width: 150px;
			position: flex;
			flex-direction: column;

			li {
				padding-top: 8px;
				padding-bottom: 8px;
			}
		}
	}
	header {
		width: 100%;
		height: 80px;
		background: white;
		top: 0;
		left: 0;
		position: fixed;
		display: flex;
		flex-direction: row;
		align-items: center;
		z-index: 9999;
		border-bottom: 1px solid #e3e3e3;
		justify-content: space-around;
		.logo {
			width: 111px;
		}
		ul {
			display: flex;
			flex-direction: row;
			list-style: none;
			align-items: center;
			justify-content: space-between;
			width: 392px;
			li {
				a {
					text-decoration: none;
					display: flex;
					flex-direction: column;
					text-align: center;
					width: 48px;
					justify-content: center;
					align-items: center;
					font-size: 14px;
					color: #9f9f9f;
					word-break: keep-all;
					word-wrap: normal;
					img {
						width: 32px;
						height: auto;
						vertical-align: middle;
					}
					&:visited {
						color: #9f9f9f;
					}
					&.selected {
						color: var(--primary-color);
						svg {
							path {
								fill: var(--primary-color);
							}
							g {
								path {
									fill: var(--primary-color);
								}
							}
						}
						&:hover {
							color: #3968c4;
							svg {
								path {
									fill: #3968c4;
								}
								g {
									path {
										fill: #3968c4;
									}
								}
							}
						}
					}
					&:hover {
						color: #969696;
						svg {
							path {
								fill: #969696;
							}
							g {
								path {
									fill: #969696;
								}
							}
						}
					}
				}
			}
		}
		.profile_box {
			display: flex;
			flex-direction: row;
			align-items: center;
			img {
				padding-left: 22px;
				padding-right: 3px;
			}
			.profile_info {
				width: 97px;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				padding-left: 3px;
				padding-right: 3px;
				.lgnBtn {
					text-decoration: none;
					color: black;
				}
				.lgnBtn:visited {
					color: black;
				}
				.lgnBtn:hover {
					color: gray;
				}
			}
			.profile_image {
				background: rgb(26, 18, 71);
				border-radius: 50%;
				width: 35px;
				height: 35px;
			}
		}
	}
</style>
