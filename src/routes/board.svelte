<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	const bamboo_forest_data = [
		{ title: '2022.3.1.자 교사 전입요청 공고...', date: '2021-12-21', views: '99' },
		{ title: '2022학년도 신입생 보통교과 교...', date: '2021-12-20', views: '99' },
		{ title: '2022.3.1.자 교사 전입요청 공고...', date: '2021-12-21', views: '99' },
		{ title: '2022학년도 신입생 보통교과 교...', date: '2021-12-20', views: '99' },
		{ title: '2022.3.1.자 교사 전입요청 공고...', date: '2021-12-21', views: '99' },
		{ title: '2022학년도 신입생 보통교과 교...', date: '2021-12-20', views: '99' },
		{ title: '2022.3.1.자 교사 전입요청 공고...', date: '2021-12-21', views: '99' },
		{ title: '2022학년도 신입생 보통교과 교...', date: '2021-12-20', views: '99' },
		{ title: '2022.3.1.자 교사 전입요청 공고...', date: '2021-12-21', views: '99' },
		{ title: '2022학년도 신입생 보통교과 교...', date: '2021-12-20', views: '99' },
		{ title: '2022.3.1.자 교사 전입요청 공고...', date: '2021-12-21', views: '99' },
		{ title: '2022학년도 신입생 보통교과 교...', date: '2021-12-20', views: '99' },
		{ title: '2022.3.1.자 교사 전입요청 공고...', date: '2021-12-21', views: '99' },
		{ title: '2022학년도 신입생 보통교과 교...', date: '2021-12-20', views: '99' },
		{ title: '2022.3.1.자 교사 전입요청 공고...', date: '2021-12-21', views: '99' },
		{ title: '2022학년도 신입생 보통교과 교...', date: '2021-12-20', views: '99' }
	];

	const my_art_data = [
		{ title: '파이썬으로 알고리즘 유사 구현', date: '2021-12-21', views: '99', recommend: true },
		{ title: '애플펜슬로 기하학적 배경 만들기', date: '2021-12-20', views: '99', recommend: false },
		{ title: '파이썬으로 알고리즘 유사 구현', date: '2021-12-21', views: '99', recommend: true },
		{ title: '애플펜슬로 기하학적 배경 만들기', date: '2021-12-20', views: '99', recommend: false },
		{ title: '파이썬으로 알고리즘 유사 구현', date: '2021-12-21', views: '99', recommend: true },
		{ title: '애플펜슬로 기하학적 배경 만들기', date: '2021-12-20', views: '99', recommend: false }
	];
</script>

<div class="main_box">
	<div class="box_container">
		<h1 class="box_title">대나무숲</h1>
		<div class="notice_box">
			<div class="notice_box_child notice_box_head">
				<div class="notice_box_content notice_box_title">제목</div>
				<div class="notice_box_content notice_box_date">날짜</div>
				<div class="notice_box_content notice_box_views">조회수</div>
			</div>
			{#each bamboo_forest_data as item, i}
				<div class="notice_box_child notice_box_body">
					<div class="notice_box_content notice_box_title">
						<span class="blue_point">
							#{i + 1}번째 선대숲
						</span>
						{item.title}
					</div>
					<div class="notice_box_content notice_box_date">{item.date}</div>
					<div class="notice_box_content notice_box_views">{item.views}</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="box_container">
		<h1 class="box_title">작품전시회</h1>
		<div class="notice_box">
			<div class="notice_box_child notice_box_head">
				<div class="notice_box_content notice_box_title">제목</div>
				<div class="notice_box_content notice_box_date">날짜</div>
				<div class="notice_box_content notice_box_views">조회수</div>
			</div>
			{#each my_art_data as item, i}
				<div class="notice_box_child notice_box_body">
					<div class="notice_box_content notice_box_title">
						{#if item.recommend == true}
							<span class="blue_point"> #추천! </span>
						{/if}
						{item.title}
					</div>
					<div class="notice_box_content notice_box_date">{item.date}</div>
					<div class="notice_box_content notice_box_views">{item.views}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.main_box {
		display: flex;
		justify-content: space-between;
		position: relative;
		width: 1408px;
		margin-top: 50px;
		h1 {
			font-weight: 700;
			color: var(--text-color);
		}
	}

	.box_container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		margin-bottom: 50px;
	}

	.box_title {
		padding-left: 20px;
	}

	.notice_box {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: #ffffff;
		border-radius: 30px;
		border: 1px solid var(--border-color);
		padding: 30px;
		width: 610px;
		color: var(--text-color);
		font-size: 18px;

		.head {
			display: flex;
		}

		.notice_box_child {
			display: flex;
			flex-direction: row;
			padding-top: 14px;
			padding-bottom: 14px;

			.notice_box_content {
				display: flex;
				justify-content: left;
			}

			.notice_box_title {
				width: 420px;
				color: var(--text-color);
			}

			.notice_box_date {
				width: 120px;
				font-size: 16px;
			}

			.notice_box_views {
				width: 70px;
				justify-content: center;
				font-size: 16px;
			}

			.blue_point {
				color: var(--primary-color);
				padding-right: 20px;
			}
		}

		.notice_box_head {
			padding-top: 5px;
			padding-bottom: 20px;
			color: var(--text-color);
		}

		.notice_box_body {
			color: var(--sub-text-color) !important;
		}
	}

	li {
		list-style: none;
	}
</style>
