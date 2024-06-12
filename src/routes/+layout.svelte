<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import '../app.css';
</script>

<div class="flex text-gray-700">
	<aside class="h-screen z-20 bg-white">
    <div class="h-full w-64 p-4">
      <a class="text-lg font-bold text-gray-800 px-4" href="/">
        Leet
      </a>
      <ul class="space-y-2 mt-6">
        <li class="w-full">
          <Button variant="ghost" class="w-full text-start justify-start" href="/">
            <span class="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>
            Dashboard
          </Button>
        </li>
        <li class="w-full">
          <Button variant="ghost" class="w-full text-start justify-start" href="/surat-masuk">
            <span class="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </span>
            Surat Masuk
          </Button>
        </li>
        <li class="w-full">
          <Button variant="ghost" class="w-full text-start justify-start" href="/surat-keluar">
            <span class="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </span>
            Surat Keluar
          </Button>
        </li>
      </ul>
    </div>
  </aside>
	<div class="flex flex-col flex-1 w-full">
		<header class="z-10 py-4 px-8 bg-white shadow-md flex justify-end">
			<div class="flex text-sm px-4">
				<img class="w-10 h-10 rounded" src="https://i.pravatar.cc/150?img=60" alt="Avatar" />
				<div class="ml-4">
					<p class="font-medium">M. Rifky Naratama S.</p>
					<p class="text-sm text-gray-500">Pengguna</p>
				</div>
			</div>
		</header>
		<main class="h-full bg-gray-100">
			<div class="px-6 mx-auto grid">
				<h2 class="my-6 text-2xl font-semibold text-gray-700">Dashboard</h2>
				<slot />
			</div>
		</main>
	</div>
</div>

<svelte:head>
	<title>Lett | BPS Kota Lubuk Linggau</title>
	<meta name="description" content="Aplikasi Manajemen Surat Masuk dan Keluar BPS Kota Lubuk Linggau" />
	<meta name="keywords" content="Surat, Surat Masuk, Surat Keluar, Aplikasi, BPS, Lubuk Linggau" />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://lett-omega.vercel.app/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Lett | BPS Kota Lubuk Linggau" />
	<meta
		property="og:description"
		content="Aplikasi Manajemen Surat Masuk dan Keluar BPS Kota Lubuk Linggau"
	/>
	<!-- <meta property="og:image" content="https://lett-omega.vercel.app//og.webp" /> -->

	<!-- Twitter Meta Tags -->
	<!-- <meta name="twitter:card" content="summary_large_image" /> -->
	<meta property="twitter:domain" content="lett-omega.vercel.app" />
	<meta property="twitter:url" content="https://lett-omega.vercel.app/" />
	<meta name="twitter:title" content="Lett | BPS Kota Lubuk Linggau" />
	<meta
		name="twitter:description"
		content="Aplikasi Manajemen Surat Masuk dan Keluar BPS Kota Lubuk Linggau"
	/>

	<!-- <meta name="twitter:image" content="https://typehere.fun/og.webp" /> -->
</svelte:head>