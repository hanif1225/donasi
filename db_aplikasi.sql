-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Des 2020 pada 10.30
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_aplikasi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `donatur`
--

CREATE TABLE `donatur` (
  `id_donatur` int(11) NOT NULL,
  `tgl_transaksi` date NOT NULL DEFAULT current_timestamp(),
  `no_referensi` varchar(200) NOT NULL,
  `akad_donasi` varchar(30) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `tipe_transaksi` varchar(100) NOT NULL,
  `jumlah_donasi` int(200) NOT NULL,
  `transfer` varchar(200) NOT NULL,
  `gambar` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `donatur`
--

INSERT INTO `donatur` (`id_donatur`, `tgl_transaksi`, `no_referensi`, `akad_donasi`, `nama`, `tipe_transaksi`, `jumlah_donasi`, `transfer`, `gambar`) VALUES
(11, '2020-12-15', '', 'Zakat', 'lk', '778', 77, '', 'http://localhost/aplikasi_donasi/isi/php/donatur/1602832529.jpg'),
(34, '2020-12-15', '', 'Zakat', 'asd', '45', 435, '', '../image/image.png'),
(35, '2020-12-15', '', 'Zakat', 'a', '54', 990, '', ''),
(37, '0000-00-00', '', '', '', '', 0, '', ''),
(38, '0000-00-00', '', '', '', 'Transfer', 0, '', ''),
(41, '0000-00-00', '', '', 'donasi', '', 0, '', 'http://localhost/aplikasi_donasi/isi/php/upload/1608539150.jpg'),
(42, '0000-00-00', 'sAS', 'Zakat', 'ASD', 'Cash', 576567, '4534534', 'http://localhost/aplikasi_donasi/isi/php/upload/1608540699.jpg');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `donatur`
--
ALTER TABLE `donatur`
  ADD PRIMARY KEY (`id_donatur`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `donatur`
--
ALTER TABLE `donatur`
  MODIFY `id_donatur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
