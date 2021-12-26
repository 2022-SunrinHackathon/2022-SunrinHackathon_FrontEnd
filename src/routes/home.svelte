<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	const user_name = '주현명';
	const today = new Date();

	const today_year = today.getFullYear();
	const today_month = today.getMonth() + 1;
	const today_date = today.getDate();

	const showed_dates = today_year + '.' + today_month + '.' + today_date;

	let user = 'fsdaf';

	function today_day(value) {
		if (value == -2) {
			return '금';
		} else if (value == -1) {
			return '토';
		} else if (value == 0) {
			return '일';
		} else if (value == 1) {
			return '월';
		} else if (value == 2) {
			return '화';
		} else if (value == 3) {
			return '수';
		} else if (value == 4) {
			return '목';
		} else if (value == 5) {
			return '금';
		} else if (value == 6) {
			return '토';
		} else if (value == 7) {
			return '일';
		} else if (value == 8) {
			return '월';
		}
	}

	const day1 = today_day(today.getDay() - 2);
	const day2 = today_day(today.getDay() - 1);
	const day3 = today_day(today.getDay());
	const day4 = today_day(today.getDay() + 1);
	const day5 = today_day(today.getDay() + 2);

	const sunrin_notion_posts_data = [
		{ title: '2022.3.1.자 교사 전입요청 공고', date: '2021-12-21' },
		{ title: '2022학년도 신입생 보통교과 교과서 목록', date: '2021-12-20' },
		{ title: '2021학년도 겨울방학 중학생 특별교육 대상자 안내', date: '2021-12-15' },
		{ title: '2021학년도 소수전공 심화과정 4분기 강사채용', date: '2021-12-15' },
		{ title: '2021 스마틴 앱 챌린지(STAC) 최우수상 수상', date: '2021-12-09' },
		{ title: '2022학년도 1학기 학교 간 협력교육과정(거점형) 프로그...', date: '2021-12-07' }
	];
	const sunrin_bamboo_forest_data = [
		{
			title: '인고아웃 제작진 잘생겼어요',
			date: '2022-03-10'
		},
		{
			title: '인고아웃 개발자들 존경!!',
			date: '2022-03-08'
		},
		{
			title: 'ㅠㅠ 자료구조 너무 어렵',
			date: '2022-03-05'
		}
	];
	const today_school_food = [
		'콩밥 / 파인애플피자 / 민트초코치킨 / 애플망고볶음밥 / 고소애볶음 / 곤약젤리, 기타 등등'
	];
</script>

<div class="main_box">
	<div class="hello_to_user">
		{#if user != null}
			<span class="bold">{user_name}님, <br /> </span>
			좋은 하루 되세요!
		{:else}
			아직 로그인하지 않았습니다.
		{/if}
	</div>
	<div class="row_box">
		<div class="notice_box">
			<div class="head">
				<div class="title">학교 공지/행사</div>
				<div class="show_all">
					전체보기
					<img src="/images/arrow_bottom.svg" alt="" />
				</div>
			</div>
			<ul>
				{#each sunrin_notion_posts_data as item}
					<li>
						<div class="title">
							{item.title}
						</div>
						<div class="date">
							{item.date}
						</div>
					</li>
				{/each}
			</ul>
		</div>

		<div class="article_box">
			<div class="head">
				<div class="title">선린 대나무숲</div>
				<div class="show_all">
					전체보기
					<img src="/images/arrow_bottom.svg" alt="" />
				</div>
			</div>
			<div class="article_list">
				<div class="article">
					<div class="date">2022-03-10</div>
					<div class="title">와 이걸 117기가 만들었다고?<br />선배는 감탄했다</div>
				</div>
				<div class="line" />
				<div class="article">
					<div class="date">2022-03-08</div>
					<div class="title">정보과 디도스 날린놈 나와라.<br />뒤지기싫으면</div>
				</div>
				<div class="line" />
				<div class="article">
					<div class="date">2022-03-05</div>
					<div class="title">
						ㅠㅠ 통학 관련으로 고민입니다<br />집이 인천인데 어떻게하시나요 다들
					</div>
				</div>
			</div>
		</div>
		<div class="meal_box">
			<div class="meal_date_box">
				<div class="meal_date">
					<div class="day">월</div>
					<div class="date">20</div>
				</div>
				<div class="meal_date">
					<div class="day">화</div>
					<div class="date">21</div>
				</div>
				<div class="meal_date">
					<div class="day">수</div>
					<div class="date">22</div>
				</div>
				<div class="meal_date">
					<div class="day">목</div>
					<div class="date">23</div>
				</div>
				<div class="meal_date selected">
					<div class="day">금</div>
					<div class="date">24</div>
				</div>
			</div>
			<div class="meal_info">
				<div class="head">
					<div class="title">
						오늘의 급식
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18.243"
							height="10.621"
							viewBox="0 0 18.243 10.621"
						>
							<g id="그룹_692" data-name="그룹 692" transform="translate(-1194.879 -270.879)">
								<path
									id="Icon_feather-chevron-down"
									data-name="Icon feather-chevron-down"
									d="M9,13.5l7,7,7-7"
									transform="translate(1188 259.5)"
									fill="none"
									stroke="#4b87fe"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="3"
								/>
							</g>
						</svg>
					</div>
					<div class="date">
						{showed_dates}
					</div>
				</div>
				<div class="meal_info_content">
					<div class="meal_text">
						간장계란밥 / 어묵국 / 브로콜리땅콩무침 / 볶음우동 / 깍두기 / 곤약젤리, 민트초코
						아이스크림
					</div>
					<img src="/images/meal.png" class="meal_img" alt="" />
				</div>
			</div>
		</div>
	</div>
	<div class="row_box">
		<div class="article_box">
			<div class="head">
				<div class="title">분실물 있어요~</div>
				<div class="show_all">
					전체보기
					<img src="/images/arrow_bottom.svg" alt="" />
				</div>
			</div>
			<div class="article_list">
				<div class="article">
					<div class="date">2022-03-10</div>
					<div class="title">신관에서<br />맥북 주웠어요</div>
				</div>
				<div class="line" />
				<div class="article">
					<div class="date">2022-03-10</div>
					<div class="title">ㅠㅠ 맥실에서 지갑 발견하신분<br />있나용?</div>
				</div>
				<div class="line" />
				<div class="article">
					<div class="date">2022-03-10</div>
					<div class="title">정보과 디도스 날린놈 나와라.<br />뒤지기싫으면</div>
				</div>
			</div>
		</div>
		<div class="notice_box">
			<div class="head">
				<div class="title">Ingoout 소식</div>
				<div class="show_all">
					전체보기
					<img src="/images/arrow_bottom.svg" alt="" />
				</div>
			</div>
			<ul>
				{#each sunrin_notion_posts_data as item}
					<li>
						<div class="title">
							{item.title}
						</div>
						<div class="date">
							{item.date}
						</div>
					</li>
				{/each}
			</ul>
		</div>

		<div class="white_box">추후 추가될 곳입니다<br />기대해주세요!</div>
	</div>
</div>

<style lang="scss">
	.main_box {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 1408px;
		margin-top: 60px;
		.row_box {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 60px;
		}
	}

	.meal_img {
		width: 340px;
	}
	.hello_to_user {
		line-height: 34px;
		font-size: 25px;
		color: #707070;
		margin: 10px 10px 50px;
	}

	.bold {
		font-weight: 700;
		color: #333333;
	}

	.notice_box {
		display: flex;
		height: 292px;
		width: 468px;
		padding: 30px;
		font-size: 11px;
		border-radius: 30px;
		border: 1px solid var(--border-color);
		background-color: white;
		flex-direction: column;
		.head {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			.title {
				font-size: 25px;
				color: var(--primary-color);
				font-weight: 700;
			}
			.show_all {
				width: 70px;
				font-size: 15px;
				color: #9f9f9f;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
			}
		}
		ul {
			width: 100%;
			height: 100%;
			margin-top: 30px;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-left: 0;
			justify-content: space-between;
			li {
				width: 100%;
				position: relative;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				font-size: 15px;

				text-align: left;
				div.title {
					font-weight: 600;
					color: var(--text-color);
				}
				div.date {
					font-weight: 500;
					color: var(--sub-text-color);
				}
			}
		}
	}

	.article_box {
		display: flex;
		width: 340px;
		height: 292px;
		padding: 30px;
		font-size: 11px;
		border-radius: 30px;
		border: 1px solid var(--border-color);
		background-color: white;
		flex-direction: column;
		justify-content: space-between;
		.head {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			.title {
				font-size: 25px;
				color: var(--primary-color);
				font-weight: 700;
			}
			.show_all {
				width: 70px;
				font-size: 15px;
				color: var(--sub-text-bold-color);
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
			}
		}
		.article_list {
			position: relative;
			display: flex;
			flex-direction: column;
			text-align: left;
			justify-content: space-evenly;
			.article {
				font-size: 15px;

				.title {
					color: var(--text-color);
					font-weight: 500;
					line-height: 20px;
					margin-bottom: 5px;
				}
				.date {
					margin-top: 5px;
					margin-bottom: 5px;
					color: var(--sub-text-color);
				}
			}
			.line {
				height: 1px;
				background: var(--line-color);
				margin-top: 5px;
				margin-bottom: 5px;
			}
		}
	}
	.meal_box {
		display: flex;
		width: 400px;
		height: 352px;
		font-size: 11px;
		flex-direction: column;
		justify-content: space-between;
		.meal_date_box {
			display: flex;
			height: 88px;
			flex-direction: row;
			justify-content: space-between;
			.meal_date {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 4px;
				height: 28px;
				padding: 30px;
				border-radius: 20px;
				border: 1px solid var(--border-color);
				background-color: white;
				&.selected {
					background-color: var(--primary-color);
					.day {
						color: #ffffff;
						font-weight: 700;
						font-size: 20px;
					}
					.date {
						color: #ffffff;
						font-size: 20px;
						font-weight: 700;
					}
				}
				.day {
					color: var(--primary-color);
					font-weight: 700;
					font-size: 20px;
				}
				.date {
					color: var(--text-color);
					font-size: 20px;
					font-weight: 700;
				}
			}
		}
		.meal_info {
			display: flex;
			width: 340px;
			height: 170px;
			padding: 30px;
			font-size: 11px;
			border-radius: 30px;
			border: 1px solid var(--border-color);
			background-color: white;
			flex-direction: column;
			justify-content: space-between;
			.head {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				.title {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					font-size: 25px;
					color: var(--primary-color);
					font-weight: 700;
					width: 140px;
				}
				.date {
					font-size: 15px;
					color: var(--sub-text-color);
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
				}
			}
			.meal_info_content {
				display: flex;
				flex-direction: row;
				height: 120px;
				justify-content: space-between;
				align-items: center;
				.meal_text {
					height: auto;
					width: 150px;
					font-size: 15px;
					line-height: 30px;
				}
				.meal_img {
					width: auto;
					height: 120px;
					border-radius: 10px;
				}
			}
		}
	}
	.white_box {
		display: flex;
		width: 340px;
		height: 292px;
		padding: 30px;
		font-size: 23px;
		border-radius: 30px;
		border: 1px solid var(--border-color);
		background-color: white;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--sub-text-color);
		text-align: center;
		line-height: 43px;
	}

</style>
