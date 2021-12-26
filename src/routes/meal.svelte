<script context="module">
	export const prerender = true;
</script>

<script lang="ts">



	const day:Date = new Date();
	const today_school_food = [
		'고수무침 / 닭똥집 / 민트치킨 / 파인애플피자 / 번데기볶음 / 김치초코비빔밥 / 주스',
		915
	];

	const today_year = day.getFullYear();
	const today_month = day.getMonth() + 1;
	const today_date = day.getDate();

	const showed_dates = today_year + '-' + today_month + '-' + today_date;
	const weekday = ['일','월','화','수','목','금','토'];


	const today_day = weekday[day.getDay()];

	const days_data = [
		{ day: weekday[day.getDay() - 2], date: today_date - 2 },
		{ day: weekday[day.getDay() - 1], date: today_date - 1 },

		{ day: today_day, date: today_date },

		{ day: weekday[day.getDay() + 1], date: today_date + 1 },
		{ day: weekday[day.getDay() + 2], date: today_date + 2 }
	];
</script>

<div class="main_box">
	<h1>급식표</h1>

	<div class="row_box">
		{#each days_data as item}
			{#if item.date === today_date}
				<div class="date_box today_blue">
					<div class="date_box_day">
						{item.day}
					</div>
					<div class="date_box_date">
						{item.date}
					</div>
				</div>
			{:else}
				<div class="date_box">
					<div class="date_box_day">
						{item.day}
					</div>
					<div class="date_box_date">
						{item.date}
					</div>
				</div>
			{/if}
		{/each}

		<div class="date_box">
			<div class="date_box_day day_weekend">토</div>
		</div>

		<div class="date_box">
			<div class="date_box_day day_weekend">일</div>
		</div>
	</div>

	<div class="text_row">
		<div class="medium_title">오늘의 급식</div>
		<div class="small_title">
			{showed_dates}
		</div>
	</div>

	<br />
	<div class="row_box">
		<div class="menu_box">
			<div class="today_menu">
				{today_school_food[0]}
			</div>
			<div class="today_kcal">
				{today_school_food[1]} kcal
			</div>
		</div>
		<img style="border-radius: 30px;" src="/images/meal.png" alt="" />
	</div>


	<div class="row_box">
		<div class="medium_title">캘린더</div>
		<div class="calender">
			{today_year}년 {today_month}월
		</div>
	</div>

	<table class="calender_box">
		<thead>
			<tr>
				<th>일</th>
				<th>월</th>
				<th>화</th>
				<th>수</th>
				<th>목</th>
				<th>금</th>
				<th>토</th>
			</tr>
		</thead>
		<tbody>
			{#each [1, 2, 3, 4, 5] as item, i}
				<tr>
					{#each [1, 2, 3, 4, 5, 6, 7] as item, i}
						<th>
							<div>20</div>
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
		margin-top: 60px;
	}

	.text_row {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		align-content: center;
	}
	.row_box {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		align-content: center;
		margin-top: 20px;
		margin-bottom: 45px;

		img { height: 222px; }

		.calender {
			border-radius: 15px;
			border: 1px solid var(--border-color);
			background-color: white;
			padding: 5px 20px;
		}
	}

	.calender_box {
		font-weight: 400;
		border: 1px solid var(--border-color);
		border-radius: 20px;
		background-color: white;
		table-layout: fixed;
		width: 100%;
		padding: 10px;
		margin-bottom: 60px;
		thead {
			tr {
				th {
					padding: 10px 15px 10px 15px;
					&:first-child {
						color: #fe744b;
					}
					&:last-child {
						color: var(--primary-color);
					}
				}
			}
		}
		tbody {
			tr {
				th {
					&:first-child {
						div {
							color: #fe744b;
						}
					}
					&:last-child {
						div {
						color: var(--primary-color);
						}
					}
					div {
						position: relative;
						width: 60px;
						height: 60px;
						padding: 10px;
						background-color: rgb(247, 247, 247);
						border: 10px solid white;
						border-radius: 20px;
						text-align: start;
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
		color: var(--sub-text-color);
		margin-top: 20px;
	}

	.medium_title {
		font-weight: 600;
		font-size: 25px;
		color: var(--text-color)
	}

	.small_title {
		font-size: 17px;
		font-weight: 500;
		color: var(--sub-text-bold-color);
	}

	.menu_box {
		border: 1px solid var(--border-color);
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
		border: 1px solid var(--border-color);
		padding: 14px 17px 12px;
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
			color: var(--primary-color);
		}

		.day_weekend {
			padding-top: 25px;
			bottom: 12px;
			position: relative;
			color: #bababa;
		}
	}

	.today_blue {
		background-color: var(--primary-color);
		border: 1px solid var(--primary-color);
		color: white;

		.date_box_day {
			color: white;
		}
	}
</style>
