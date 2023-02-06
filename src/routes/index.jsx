import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultFooter from '../layouts/footers/DefaultFooter';
import DefaultHeader from '../layouts/headers/DefaultHeader';
import LayoutIndex from '../layouts/LayoutIndex';
// import NotFound from '../pages/error/NotFound';
import Video from '../pages/video/Video';
import VideoDetail from '../pages/video/VideoDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutIndex header={DefaultHeader} footer={DefaultFooter} />,
		// errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Video />
			},
			{
				path: '/videos',
				element: <Video />
			},
			{
				path: '/videos/:keyword',
				element: <Video />
			},
			{
				path: '/videos/watch/:id',
				element: <VideoDetail />
			}
		]
	}
]);

export default function RouterSettings({ children }) {
	return <RouterProvider router={router}>{children}</RouterProvider>;
}
