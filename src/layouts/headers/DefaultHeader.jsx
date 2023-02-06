import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function DefaultHeader() {
	const { keyword } = useParams();
	const [text, setText] = useState('');
	const navigate = useNavigate();
	const handleSubmit = e => {
		e.preventDefault();
		navigate(`/videos/${text}`);
	};
	useEffect(() => {
		setText(keyword || '');
	}, [keyword]);

	return (
		<header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
			<Link to="/" className="flex items-center">
				<BsYoutube className="text-4xl text-brand" />
				<h1 className="font-bold ml-2 text-3xl">Youtube</h1>
			</Link>
			<form onSubmit={handleSubmit} className="w-full flex justify-center">
				<input
					className="w-7/12 p-2 outline-none bg-black text-gray-50"
					type="text"
					placeholder="Search..."
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<button className="bg-zinc-600  p-4">
					<BsSearch />
				</button>
			</form>
			{/* <div className="max-w-screen-lg  flex mx-auto p-3 py-4 border-b border-b-gray-400">
				<div className="logo">
					<h1>
						<a href="#" className="flex items-center gap-2 ">
							<BsYoutube className="text-red-600 text-3xl" />
							<span className="text-white text-2xl font-bold mb-1">
								Youtube
							</span>
						</a>
					</h1>
				</div>
				<div className="flex justify-center flex-1">
					<div className="flex">
						<input
							type="text"
							className="p-2 w-96 rounded mr-2 outline-none text-xs placeholder:text-white bg-slate-500"
							placeholder="Search..."
						/>
						<div className="h-full bg-slate-400 flex justify-center items-center rounded hover:cursor-pointer">
							<BiSearch className="text-white w-9 text-xl" />
						</div>
					</div>
				</div>
			</div> */}
		</header>
	);
}
