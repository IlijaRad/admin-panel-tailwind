const courseData = [
  {
    course: {
      name: "PHP Programiranje",
      duration: 10,
    },
    total_paid: "95,239.20 RSD",
    status: "Paid",
    name: "Marko Nikolic",
    email: "marko.nikolic@example.com",
    date: "12 January 2022",
  },
  {
    course: {
      name: "Java Programiranje",
      duration: 12,
    },
    total_paid: "136,459.59 RSD",
    status: "Cancelled",
    name: "Jelena Petrovic",
    email: "jelena.petrovic@example.com",
    date: "23 August 2021",
  },
  {
    course: {
      name: "Osnove Frontenda + PHP Programiranje",
      duration: 16,
    },
    total_paid: "117,392.00 RSD",
    status: "Refunded",
    name: "Petar Jovanovic",
    email: "petar.jovanovic@example.com",
    date: "5 November 2022",
  },
  {
    course: {
      name: "QA Testing",
      duration: 8,
    },
    total_paid: "89,998.75 RSD",
    status: "Paid",
    name: "Ana Stankovic",
    email: "ana.stankovic@example.com",
    date: "30 May 2021",
  },
  {
    course: {
      name: "Osnove Frontenda",
      duration: 6,
    },
    total_paid: "62,200.35 RSD",
    status: "Paid",
    name: "Stefan Ilic",
    email: "stefan.ilic@example.com",
    date: "22 April 2022",
  },
];

export default function Home() {
  return (
    <>
      <header className="bg-gray-900 h-[448px] flex flex-col">
        <div className="border-b bg-gray-900 border-white/[0.07]">
          <div className="w-full py-4 px-7 flex justify-between max-w-screen-xl text-white mx-auto">
            <div className="flex gap-x-16 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 fill-sky-200"
              >
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>
              <nav className="flex gap-10">
                <a href="" className="text-slate-200 font-semibold text-sm">
                  Overview
                </a>
                <a href="" className="text-slate-200 font-semibold text-sm">
                  Coupons
                </a>
                <a href="" className="text-slate-200 font-semibold text-sm">
                  Students
                </a>
                <a href="" className="text-slate-200 font-semibold text-sm">
                  Financials
                </a>
                <a href="" className="text-slate-200 font-semibold text-sm">
                  Courses
                </a>
              </nav>
            </div>
            <div className="flex gap-x-8">
              <div className="flex gap-x-5">
                <button className="text-slate-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                    />
                  </svg>
                </button>
                <button className="text-slate-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-x-3.5">
                <div className="border-gray-700 border bg-gray-800 text-gray-400 rounded-full h-10 w-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium leading-5 text-slate-200 text-[13px]">
                    Ilija Radivojevic
                  </div>
                  <div className="font-medium text-slate-500 text-xs mt-1">
                    Administrator
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-hero grow bg-center bg-cover bg-no-repeat">
          <div className="max-w-screen-xl mx-auto px-7 pt-20">
            <div className="flex text-sm justify-between items-center">
              <span className="text-slate-200 font-medium">
                <span className="text-slate-500">Overview</span> / Sales
              </span>
              <span className="font-medium text-slate-400">
                Tuesday, 25 Mar 2023
              </span>
            </div>
            <h1 className="mt-3.5 text-3xl tracking-tight text-slate-200">
              Welcome back,
              <span className="font-medium text-slate-100"> Ilija</span>
            </h1>
            <p className="mt-5 text-slate-300 leading-7 max-w-[700px]">
              This screen provides a summary of the online learning
              platform&apos;s sales, subscribers, top selling courses, and
              recent transactions for the admin&apos;s quick review and
              analysis.
            </p>
          </div>
        </div>
      </header>
      <main className="max-w-screen-xl -mt-[91px] relative px-7 w-full mx-auto">
        <div className="grid grid-cols-4 gap-x-6">
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border bg-sky-100 border-sky-200 text-sky-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-right text-[13px] leading-5">
                <span className="font-semibold text-gray-600">
                  + &euro;725.00
                </span>
                <br />
                <span className="text-gray-400 font-medium">today</span>
              </div>
            </div>
            <h2 className="text-[32px] leading-9 font-medium text-gray-900 mt-5 tracking-tighter">
              &euro; 72,590.50
            </h2>
            <div className="mt-3 text-sm leading-6 text-gray-500 font-medium">
              Total revenue
            </div>
          </div>
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border bg-sky-100 border-sky-200 text-sky-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
              </div>
              <div className="text-right text-[13px] leading-5">
                <span className="font-semibold text-gray-600">
                  + &euro;0.00
                </span>
                <br />
                <span className="text-gray-400 font-medium">today</span>
              </div>
            </div>
            <h2 className="text-[32px] leading-9 font-medium text-gray-900 mt-5 tracking-tighter">
              &euro; 42,365.00
            </h2>
            <div className="mt-3 text-sm leading-6 text-gray-500 font-medium">
              From subscriptions
            </div>
          </div>
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border bg-sky-100 border-sky-200 text-sky-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="text-right text-[13px] leading-5">
                <span className="font-semibold text-gray-600">
                  + &euro;1169.00
                </span>
                <br />
                <span className="text-gray-400 font-medium">today</span>
              </div>
            </div>
            <h2 className="text-[32px] leading-9 font-medium text-gray-900 mt-5 tracking-tighter">
              &euro; 69,696.90
            </h2>
            <div className="mt-3 text-sm leading-6 text-gray-500 font-medium">
              From orders
            </div>
          </div>
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border bg-sky-100 border-sky-200 text-sky-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <div className="text-right text-[13px] leading-5">
                <span className="font-semibold text-gray-600">+ 0</span>
                <br />
                <span className="text-gray-400 font-medium">today</span>
              </div>
            </div>
            <h2 className="text-[32px] leading-9 font-medium text-gray-900 mt-5 tracking-tighter">
              1,692
            </h2>
            <div className="mt-3 text-sm leading-6 text-gray-500 font-medium">
              Students registered
            </div>
          </div>
        </div>
        <div className="mt-10 bg-white border border-gray-100 shadow-sm rounded-2xl px-8 py-6">
          <div className="font-medium text-gray-800">Latest transactions</div>
          <div className="text-sm leading-6 text-gray-500 mt-2">
            Transactions coming from orders
          </div>
          <table className="mt-6 w-full border-separate border-spacing-0">
            <thead className="border-gray-100 text-[13px] leading-5 text-gray-500 tracking-tight">
              <tr>
                <th className="bg-gray-50 border-l border-y font-medium pl-7 pr-6 py-3.5 text-left rounded-l-lg">
                  Course
                </th>
                <th className="bg-gray-50 border-y font-medium px-6 py-3.5 text-left">
                  Total Paid
                </th>
                <th className="bg-gray-50 border-y font-medium px-6 py-3.5 text-left">
                  Student
                </th>
                <th className="bg-gray-50 border-y font-medium px-6 py-3.5 text-left">
                  Duration
                </th>
                <th className="bg-gray-50 border-y font-medium px-6 py-3.5 text-left">
                  Date
                </th>
                <th className="bg-gray-50 border-r border-y font-medium px-6 py-3.5 text-left rounded-r-lg">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {courseData.map(
                ({ course, date, email, name, status, total_paid }) => (
                  <tr key={course.name}>
                    <td className="w-[224px] text-sm leading-6 font-medium text-gray-900 pl-7 pr-6 py-3.5">
                      {course.name}
                    </td>
                    <td className="px-6 py-3.5">
                      <div className="text-sm leading-6 font-medium text-gray-900">
                        {total_paid}
                      </div>
                      <div className="mt-0.5 text-sm leading-6 text-gray-600">
                        Status: {status}
                      </div>
                    </td>
                    <td className="px-6 py-3.5">
                      <div className="text-sm leading-6 font-medium text-gray-900">
                        {name}
                      </div>
                      <div className="mt-0.5 text-sm leading-6 text-gray-600">
                        {email}
                      </div>
                    </td>
                    <td className="px-6">
                      <div className="mt-0.5 text-sm leading-6 text-gray-600">
                        {course.duration} meseci
                      </div>
                    </td>
                    <td className="px-6">
                      <div className="mt-0.5 text-sm leading-6 text-gray-600">
                        {date}
                      </div>
                    </td>
                    <td className="px-6 py-3.5">
                      <div className="flex items-center justify-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-6 h-6 text-gray-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </main>
      <footer className="mt-20 text-center px-6 h-20 text-sm bg-white leading-6 text-gray-600 border-t border-gray-100 pt-7">
        &copy; {new Date().getFullYear()} Ilija Radivojevic. All rights
        reserved.
      </footer>
    </>
  );
}
