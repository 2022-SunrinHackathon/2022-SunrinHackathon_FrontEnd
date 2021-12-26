<script context="module">
	export const prerender = true;
</script>

<script lang="ts">

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

	.main_box {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 750px;
		margin-top: 60px;
	}

	.period {
		background-color: rgb(247, 247, 247);
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



	.medium_title {
		font-weight: 600;
		font-size: 25px;
	}






</style>
