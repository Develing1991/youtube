import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { YoutubeApiProvider } from '../context/YoutubeApicontext';

export default function LayoutIndex({ header: HeaderComponent, footer: FooterComponent }) {
	const queryClient = new QueryClient();
	return (
		<>
			<HeaderComponent />
			<YoutubeApiProvider>
				<QueryClientProvider client={queryClient}>
					<Outlet />
				</QueryClientProvider>
			</YoutubeApiProvider>
			<FooterComponent />
		</>
	);
}
