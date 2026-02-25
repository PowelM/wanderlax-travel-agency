import fs from 'fs';
import path from 'path';

const SRC = path.join(process.cwd(), 'app', '(stitch)', 'wanderlux-admin-bookings-management', 'page.tsx');
const DEST = path.join(process.cwd(), 'app', 'admin', 'bookings', 'page.tsx');

let code = fs.readFileSync(SRC, 'utf-8');

// Change component name if desired
code = code.replace(/export default function WanderluxAdminBookingsManagementPage/g, 'export default function AdminBookingsPage');

// Add "use client" and useUser import
code = `"use client";\n\nimport { useUser } from '@clerk/nextjs';\n` + code;

// Add hook
code = code.replace(/export default function AdminBookingsPage\(\) \{\n/, `export default function AdminBookingsPage() {\n  const { user } = useUser();\n`);

// Replace style strings with objects for React
code = code.replace(/style='background-image: url\\("([^"]+)"\\);'/g, "style={{ backgroundImage: `url('$1')` }}");

// Add dynamic user profile logic
code = code.replace(/<div className="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-gray-200 dark:border-border-dark" data-alt="User avatar" style=\{\{ backgroundImage: `url\('([^']+)'\)` \}\}>/, 
  `<div className="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-gray-200 dark:border-border-dark" data-alt="User avatar" style={{ backgroundImage: \`url('\${user?.imageUrl || '$1'}')\` }}>`
);

// We should also replace the name and role in the header to dynamic user fullName and role if possible, but user is fine.
// <span className="text-xs font-bold text-slate-900 dark:text-white">Admin User</span>
// <span className="text-[10px] text-slate-500 dark:text-slate-400">Super Admin</span>
code = code.replace(
  /<span className="text-xs font-bold text-slate-900 dark:text-white">Admin User<\/span>/,
  `<span className="text-xs font-bold text-slate-900 dark:text-white">{user?.fullName || 'Admin User'}</span>`
);
code = code.replace(
  /<span className="text-\[10px\] text-slate-500 dark:text-slate-400">Super Admin<\/span>/,
  `<span className="text-[10px] text-slate-500 dark:text-slate-400">{user?.publicMetadata?.role === 'ADMIN' ? 'Super Admin' : (user?.publicMetadata?.role as string) || 'Super Admin'}</span>`
);

// We need to replace HTML comments with JSX comments
code = code.replace(/<!-- (.*?) -->/g, '{/* $1 */}');

// The portal navigation in bookings was:
code = code.replace(/<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-card-dark transition-colors group" href="#">\n<span className="material-symbols-outlined text-slate-400 group-hover:text-primary">pie_chart<\/span>\n<span className="text-sm font-medium">Dashboard<\/span>\n<\/a>/,
  `<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-card-dark transition-colors group" href="/admin">\n<span className="material-symbols-outlined text-slate-400 group-hover:text-primary">pie_chart</span>\n<span className="text-sm font-medium">Dashboard</span>\n</a>`
)

code = code.replace(/<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-card-dark transition-colors group" href="#">\n<span className="material-symbols-outlined text-slate-400 group-hover:text-primary">map<\/span>\n<span className="text-sm font-medium">Destinations<\/span>\n<\/a>/,
  `<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-card-dark transition-colors group" href="/admin/fleet">\n<span className="material-symbols-outlined text-slate-400 group-hover:text-primary">directions_car</span>\n<span className="text-sm font-medium">Fleet</span>\n</a>`
)

fs.writeFileSync(DEST, code, 'utf-8');
console.log('Bookings page created successfully.');
