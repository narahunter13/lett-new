import { sql } from "drizzle-orm";
import { blob, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const kodeArsip = sqliteTable('kode_arsip', {
    id: integer('id').primaryKey(),
    kode: text('kode'),
    nama: text('nama'),
    createdAt: text("timestamp").default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text("timestamp").default(sql`(CURRENT_TIMESTAMP)`)
});

export const kodeSurat = sqliteTable('kode_surat', {
    id: integer('id').primaryKey(),
    kode: text('kode'),
    tandaTangan: text('nama'),
    createdAt: text("timestamp").default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text("timestamp").default(sql`(CURRENT_TIMESTAMP)`)
});

export const nomorSurat = sqliteTable('nomor_surat', {
    id: integer('id').primaryKey(),
    nomor: integer('nomor'),
    abjad: text('abjad'),
    tanggal: blob('tanggal', { mode: 'bigint' }),
    createdAt: text("timestamp").default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text("timestamp").default(sql`(CURRENT_TIMESTAMP)`)
});

export const suratMasuk = sqliteTable('surat_masuk', {
    id: integer('id').primaryKey(),
    nomorSuratId: integer('nomor_surat_id').references(() => nomorSurat.id),
    nomorTanggalSurat: text('nomor_tanggal_surat'),
    namaPenerima: text('nama_penerima'),
    namaPengirim: text('nama_pengirim'),
    isi: text('isi'),
    createdAt: text("timestamp").default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text("timestamp").default(sql`(CURRENT_TIMESTAMP)`)
});

export const suratKeluar = sqliteTable('surat_keluar', {
    id: integer('id').primaryKey(),
    nomorSuratId: integer('nomor_surat_id').references(() => nomorSurat.id),
    kodeSuratId: integer('kode_surat_id').references(() => kodeSurat.id),
    kodeArsipId: integer('kode_arsip_id').references(() => kodeArsip.id),
    namaPenyusun: text('nama_penyusun'),
    alamatSurat: text('alamat_surat'),
    isi: text('isi'),
    createdAt: text("timestamp").default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text("timestamp").default(sql`(CURRENT_TIMESTAMP)`)
});