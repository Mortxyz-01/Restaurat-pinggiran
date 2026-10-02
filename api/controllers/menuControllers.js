const db = require("../config/database");

const getAllMenu = async (req, res) => {
    try {
        const [rows] = await db.query(
            "SELECT * FROM menu ORDER BY id DESC"
        );

        res.json({
            success: true,
            data: rows
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Gagal mengambil data menu"
        });
    }
};


const getMenuById = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await db.query(
            "SELECT * FROM menu WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Menu tidak ditemukan"
            });
        }

        res.json({
            success: true,
            data: rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Gagal mengambil data menu"
        });
    }
};


const createMenu = async (req, res) => {
    try {
        const {
            nama,
            kategori,
            harga,
            gambar
        } = req.body;

        if (!nama || !kategori || !harga) {
            return res.status(400).json({
                success: false,
                message: "Nama, kategori, dan harga wajib diisi"
            });
        }

        const [result] = await db.query(
            `INSERT INTO menu
            (nama, kategori, harga, gambar)
            VALUES (?, ?, ?, ?)`,
            [nama, kategori, harga, gambar || null]
        );

        res.status(201).json({
            success: true,
            message: "Menu berhasil ditambahkan",
            data: {
                id: result.insertId,
                nama,
                kategori,
                harga,
                gambar: gambar || null
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Gagal menambahkan menu"
        });
    }
};


const updateMenu = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            nama,
            kategori,
            harga,
            gambar
        } = req.body;

        const [result] = await db.query(
            `UPDATE menu
            SET nama = ?,
                kategori = ?,
                harga = ?,
                gambar = ?
            WHERE id = ?`,
            [nama, kategori, harga, gambar || null, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Menu tidak ditemukan"
            });
        }

        res.json({
            success: true,
            message: "Menu berhasil diperbarui"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Gagal memperbarui menu"
        });
    }
};


const deleteMenu = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.query(
            "DELETE FROM menu WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Menu tidak ditemukan"
            });
        }

        res.json({
            success: true,
            message: "Menu berhasil dihapus"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Gagal menghapus menu"
        });
    }
};


module.exports = {
    getAllMenu,
    getMenuById,
    createMenu,
    updateMenu,
    deleteMenu
};