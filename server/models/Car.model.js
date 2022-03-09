const { Schema, model } = require('mongoose');

const dataSchema = new Schema(
  {
    ItemCode: { type: String, default: '' },
    ItemName: { type: String, default: '' },
    Mnfctr: { type: String, default: '' },
    Year: { type: Number, default: null },
    Hand: { type: Number, default: null },
    Gear: { type: String, default: '' },
    Color: { type: String, default: '' },
    EngineCC: { type: Number, default: null },
    U_EngnType: { type: Number, default: null },
    EnginType: { type: Number, default: null },
    KM: { type: Number, default: null },
    OriginOwner: { type: String, default: '' },
    PrevOnwer: { type: String, default: '' },
    LeviItzhakPrice: { type: Number, default: null },
    LeviItzhakCode: { type: Number, default: null },
    ManagerPrice: { type: Number, default: null },
    Notes: { type: String, default: '' },
    Place: { type: Number, default: null },
    TreatmentBook: { type: String, default: '' },
    InspectionDoc: { type: String, default: '' },
    SegmentGroup: { type: Number, default: null },
    Segment: { type: String, default: '' },
    DemandPrice: { type: String, default: '' },
    Pictures: [{ type: String, default: '' }],
    ModelCode: { type: String, default: '' },
    Seats: { type: Number, default: null },
    Doors: { type: Number, default: null },

  },
  { timestamps: true }
);

module.exports = model('Car', dataSchema);
