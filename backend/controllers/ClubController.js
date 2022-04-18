// Importamos el Modelo
import ClubModel from "../models/ClubModel.js";

// Metodos para el Crud

// Mostrar todos los registros
export const getAllClubes = async (req, res) => {
  try {
    const clubes = await ClubModel.findAll();
    res.json(clubes);
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Mostrar un registro
export const getClub = async (req, res) => {
  try {
    const club = await ClubModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(club[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Crear un registro
export const createClub = async (req, res) => {
  try {
    await ClubModel.create(req.body);
    res.json({ messagge: "Registro creado correctamnte" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Actualizar un registro
export const updateClub = async (req, res) => {
  try {
    await ClubModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ messagge: "Registro actualizado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Eliminar un registro
export const deleteClub = async (req, res) => {
  try {
    await ClubModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ messagge: "Registro eliminado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
