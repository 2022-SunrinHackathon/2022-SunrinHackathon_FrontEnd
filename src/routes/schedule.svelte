<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';
	//와 !!!! 화이팅....!!!!#!#!##!#ㅇㄴㅁㄻㄻㄴㄹ
	// 주석은 어떻게 다는거 배우셔썽요 저 코딩 쬐끔 배웟습니다 하핳 역시나야(??????)
	// 비주얼스튜디오쓰다가 자바가니깐 신세계를 느꼈었...습니다. 여기가 더 편한듯? ㅋㅋㅋㅋ
	const today = new Date();

	const today_school_food = [
		'고수무침 / 닭똥집 / 민트치킨 / 파인애플피자 / 번데기볶음 / 김치초코비빔밥 / 주스',
		915
		// 이 급식 나오면 자퇴함 학교 안다닐거야;;
		// 최고의 음식인데요
	];

	const today_year = today.getFullYear();
	const today_month = today.getMonth() + 1;
	const today_date = today.getDate();

	const showed_dates = today_year + '-' + today_month + '-' + today_date;

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

	const days_data = [
		{ day: today_day(today.getDay() - 2), date: today_date - 2 },
		{ day: today_day(today.getDay() - 1), date: today_date - 1 },

		{ day: today_day(today.getDay()), date: today_date },

		{ day: today_day(today.getDay() + 1), date: today_date + 1 },
		{ day: today_day(today.getDay() + 2), date: today_date + 2 }
	];
</script>

<div class="main_box">
	<div class="row_box">
		<div class="medium_title">시간표(1학기)</div>
		<div class="calender">1학년</div>
		<div class="calender">6반</div>
	</div>

	<table class="calender_box">
		<thead>
			<tr>
				<th class="period">교시</th>
				<th>월</th>
				<th>화</th>
				<th>수</th>
				<th>목</th>
				<th>금</th>
			</tr>
		</thead>
		<tbody>
			{#each [1, 2, 3, 4, 5, 6, 7] as item, i}
				<tr>
					<th>
						<div class="period">{i + 1}교시</div>
					</th>
					{#each [1, 2, 3, 4, 5] as item, i}
						<th>
							<div>수학</div>
						</th>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	h1 {
		font-size: 30px;
		font-weight: 700;
	}
	.main_box {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 750px;
		padding-top: 60px;
	}

	.period {
		background-color: rgb(247, 247, 247);
	}

	.text_row {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
	}

	.row_box {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		margin-top: 20px;
		margin-bottom: 45px;

		img {
			height: 222px;
		}

		.calender {
			border-radius: 15px;
			border: 1px solid rgb(220, 220, 220);
			background-color: rgb(220, 220, 220);
			padding: 5px;
			padding-left: 20px;
			padding-right: 20px;
			justify-content: flex-end;
		}
	}

	.calender_box {
		font-weight: 400;
		border: 1px solid #eaeaea;
		border-radius: 20px;
		background-color: white;
		table-layout: fixed;
		width: 100%;
		padding: 10px;
		margin-bottom: 60px;
		thead {
			tr {
				th {
					padding: 10px;
				}
			}
		}
		tbody {
			tr {
				th {
					div {
						position: relative;
						width: 99px;
						height: 40px;
						padding: 10px;
						color: #9f9f9f;
					}
				}
			}
		}
	}

	.today_menu {
		font-size: 20px;
	}

	.today_kcal {
		color: rgb(180, 180, 180);
		margin-top: 20px;
	}

	.medium_title {
		font-weight: 600;
		font-size: 25px;
	}

	.small_title {
		font-size: 17px;
		font-weight: 500;
		color: rgb(180, 180, 180);
	}

	.menu_box {
		border: 1px solid #eaeaea;
		border-radius: 20px;
		background-color: white;
		width: 350px;
		padding: 30px;
		line-height: 35px;
		height: 160px;
		position: inherit;
		display: inline-block;
	}

	.date_box {
		border: 1px solid #eaeaea;
		padding: 17px;
		padding-top: 14px;
		padding-bottom: 12px;
		font-size: 20px;
		display: inline-block;
		height: 55px;
		background-color: white;
		border-radius: 20px;
		width: 38px;
		text-align: center;
		font-weight: 600;
		line-height: 25px;
		color: #606060;

		.date_box_day {
			color: #4b87fe;
		}

		.day_weekend {
			padding-top: 25px;
			bottom: 12px;
			position: relative;
			color: #bababa;
		}
	}

	.wrap_content_today {
		height: 300px;
		margin-top: 50px;
	}

	.today_blue {
		background-color: rgb(89, 133, 246);
		border: 1px solid rgb(89, 133, 246);
		color: white;

		.date_box_day {
			color: white;
		}
	}
</style>
