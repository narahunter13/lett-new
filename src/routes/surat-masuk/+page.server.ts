import { db } from "$lib/db/db";
import { nomorSurat, suratMasuk } from "$lib/db/tables";
import { eq, sql } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async () => {
    return {
        list: await db
            .select({
                id: suratMasuk.id,
                nomorSurat: sql`cast(concat(${nomorSurat.nomor}, ${nomorSurat.abjad}) as text)`,
                nomorTanggalSurat: suratMasuk.nomorTanggalSurat,
                tanggal: nomorSurat.tanggal,
                namaPenerima: suratMasuk.namaPenerima,
                namaPengirim: suratMasuk.namaPengirim,
                isi: suratMasuk.isi
            })
            .from(suratMasuk)
            .innerJoin(nomorSurat, eq(suratMasuk.nomorSuratId, nomorSurat.id))
            .orderBy(nomorSurat.tanggal)
    }
});