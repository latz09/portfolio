import Link from 'next/link'

const MyStory = () => {
	return (
		<div className='pt-12 p-3'>
			<article className='story-paragraph'>
				<h1 className='story-header'>My journey thus far</h1>
				<div className='bg-gray-300 px-4 py-1 rounded-sm border-x'>
					<div className=''>
						<p>
							In 2011 I moved to Minneapolis and enrolled at The Art Institute
							where I received my Bachelors degree of Science in Culinary
							Management.
						</p>
						<p>
							I took an entry position with a new hotel – Firelake Restaurant at
							the Radisson Blu Mall of America. While at that position as a line
							cook and with my degree I not only learned the art of the food,
							the techniques or the creativity and genuine passion needed. I
							also learned that succeeding in that industry was much more. It
							also takes the ability to skillfully multitask while remaining
							organized to the highest of standards.
						</p>
					</div>
					<div className=''>
						<p>
							After five years at the Firelake restaurant I had worked my way up
							to Chef de Partie (supervisor). That lead me to take a position as
							a Sous chef at an owner ran restaurant that was also highly ranked
							in the cities, winning many awards: Revival Minneapolis.
						</p>
						<p>
							There I learned the stamina it takes to manage a smaller and
							exceedingly busy restaurant both physically and mentally. Though,
							I will say, I enjoyed those long days and nights. That feeling of
							accomplishment at the end of a successful day where you and your
							team made it to the other side of the chaos that we had endured in
							the previous hours.
						</p> 
					</div>
					<div className=''>
						<p>
							In 2019 I went back to the corporate hotel side of the industry,
							at the Hyatt Regency as the Executive Sous Chef. There I gained
							the knowledge of the true leadership skills it takes to lead a
							team and to get the best out of every individual team member. As
							the Executive Sous Chef, I had mastered the art of time management
							as well as the resiliency needed to handle constructive criticism.
							Looking at it honestly and improving my skillsets.
						</p>
					</div>
					<div className=''>
						<p>
							Which all leads to the pandemic and the uncertainty of
							restaurants. I was laid off when all the restaurants closed and my
							daughter was three months old. As I found myself unable to work in
							my industry for the first time in nearly a decade, I became a
							stay-at-home dad. I inevitably fell more in love with my daughter
							and I have loved every minute of it.
						</p>
						<p>
							As much as I loved being a chef, I looked at my future and decided
							I do not care to continue working most nights and nearly every
							holiday.
						</p>
					</div>
					<div className=''>
						<p>
							I was unsure about what my future entailed, when a friend
							introduced me into something called codecademy and a I truly
							enjoyed it. Soon after that, I enrolled in a 6 month long bootcamp, took
							multiple online courses and trainings, watched countless youtube
							videos and of course, hundreds of hours of coding. I constructed
							myself a path acquiring the skills and tools needed to become a
							programmer. After a somewhat long journey with many ups and some
							downs, I have acquired the skills and tools needed to feel
							confident in myself as a programmer.
						</p>
					</div>
					<div className='snap-center'>
						<p>
							Also knowing, as I gained an understanding of as a Chef, to go into
							it with the willingness to continue learning and continue
							acquiring the never-ending sources of skills and knowledge.
						</p>
						<p className='md:text-base cursor-pointer'>
							Take a look at my latest project{' '}
							<Link href={'/my_projects'}>
								<span className='font-semibold text-gray-100 rounded-md tracking-widest p-1 bg-green-500'>Here</span>
							</Link>
						</p>
						<p>Thank you</p>
					</div>
				</div>
			</article>
		</div>
	);
};

export default MyStory;

//have them different colors...trying to figure out how to scroll each section
