import MeetupList from "@/components/meetups/MeetupList";

function HomePage() {
	const DummyList = [
		{
			id: "p1",
			image:
				"https://images.unsplash.com/photo-1565953522043-baea26b83b7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
			title: " the first meetup location",
			address: " No 23 main street",
		},
		{
			id: "p2",
			image:
				"https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			title: " the first meetup location",
			address: " No 23 main street",
		},
	];
	return (
		<div>
			<MeetupList meetups={DummyList} />
		</div>
	);
}
export default HomePage;
