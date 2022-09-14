import filtrarData from '../src/app.js';

const datatest = [
    {
        "fecha": "14-09-2022",
        "local_id": "534",
        "local_nombre": "TORRES MPD",
        "comuna_nombre": "RECOLETA",
        "localidad_nombre": "RECOLETA",
        "local_direccion": "AVENIDA EL SALTO 2972",
        "funcionamiento_hora_apertura": "10:30 hrs.",
        "funcionamiento_hora_cierre": "19:30 hrs.",
        "local_telefono": "+560225053570",
        "local_lat": "-33.3996351",
        "local_lng": "-70.62894990000001",
        "funcionamiento_dia": "miercoles",
        "fk_region": "7",
        "fk_comuna": "122"
    },
    {
    "fecha": "14-09-2022",
        "local_id": "758",
        "local_nombre": "EL ALBA",
        "comuna_nombre": "BUIN",
        "localidad_nombre": "BUIN",
        "local_direccion": "FRANCISCO JAVIER KRUGGER 3881. L - 1",
        "funcionamiento_hora_apertura": "08:30 hrs.",
        "funcionamiento_hora_cierre": "21:30 hrs.",
        "local_telefono": "+560228221347",
        "local_lat": "-33.761703",
        "local_lng": "-70.735348",
        "funcionamiento_dia": "miercoles",
        "fk_region": "7",
        "fk_comuna": "83"
    },
    {
        "fecha": "14-09-2022",
        "local_id": "784",
        "local_nombre": "DYLAN 2",
        "comuna_nombre": "CERRO NAVIA",
        "localidad_nombre": "CERRO NAVIA",
        "local_direccion": "JOSÉ JOAQUÍN PÉREZ 7287",
        "funcionamiento_hora_apertura": "10:00 hrs.",
        "funcionamiento_hora_cierre": "19:00 hrs.",
        "local_telefono": "+560222152793",
        "local_lat": "-33.429571",
        "local_lng": "-70.737089",
        "funcionamiento_dia": "miercoles",
        "fk_region": "7",
        "fk_comuna": "86"
    },
    {
        "fecha": "14-09-2022",
        "local_id": "848",
        "local_nombre": "MARAZUL",
        "comuna_nombre": "EL BOSQUE",
        "localidad_nombre": "EL BOSQUE",
        "local_direccion": "LO MARTINEZ 748. LOCAL A",
        "funcionamiento_hora_apertura": "10:00 hrs.",
        "funcionamiento_hora_cierre": "21:00 hrs.",
        "local_telefono": "+560225283700",
        "local_lat": "-33.572276",
        "local_lng": "-70.668293",
        "funcionamiento_dia": "miercoles",
        "fk_region": "7",
        "fk_comuna": "90"
    },
    {
        "fecha": "14-09-2022",
        "local_id": "856",
        "local_nombre": "SAN JUAN",
        "comuna_nombre": "EL MONTE",
        "localidad_nombre": "EL MONTE",
        "local_direccion": "AV. LIBERTADORES  301",
        "funcionamiento_hora_apertura": "09:30 hrs.",
        "funcionamiento_hora_cierre": "20:30 hrs.",
        "local_telefono": "+560228181737",
        "local_lat": "-33.679122",
        "local_lng": "-70.979236",
        "funcionamiento_dia": "miercoles",
        "fk_region": "7",
        "fk_comuna": "91"
    }
]

describe("filtrarData retorna información de los locales según su comuna", () => {
    it("Deberia ser una función", () => {
      expect(typeof filtrarData).toBe("function");
    });

    it("Para la farmacia 1 debiese retornar la comuna 122 (Recoleta)", () => {
        let dataComuna = filterData("122", datatest);
        expect(dataComuna[0].fk_comuna).toEqual("122");
      });

    it("Para la farmacia 2 debiese retornar la comuna 83 (Buin)", () => {
        let dataComuna = filterData("83", datatest);
        expect(dataComuna[1].fk_comuna).toEqual("83");
      });

    it("Para la farmacia 3 debiese retornar la comuna 86 (Cerro Navia)", () => {
        let dataComuna = filterData("86", datatest);
        expect(dataComuna[2].fk_comuna).toEqual("86");
      });

    it("Para la farmacia 1 debiese retornar la comuna 90 (El Bosque)", () => {
        let dataComuna = filterData("90", datatest);
        expect(dataComuna[3].fk_comuna).toEqual("90");
      });

    it("Para la farmacia 1 debiese retornar la comuna 91 (El Monte)", () => {
        let dataComuna = filterData("91", datatest);
        expect(dataComuna[4].fk_comuna).toEqual("91");
      });
})


