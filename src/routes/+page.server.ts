import { db } from "$lib/db/db";
import { suratKeluar, suratMasuk } from "$lib/db/tables";
import { count } from "drizzle-orm";
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = (async () => {
    return {
        countSuratMasuk: await db.select({ total: count() }).from(suratMasuk).then((res) => res[0].total),
        countSuratKeluar: await db.select({ total: count() }).from(suratKeluar).then((res) => res[0].total)
    };
});