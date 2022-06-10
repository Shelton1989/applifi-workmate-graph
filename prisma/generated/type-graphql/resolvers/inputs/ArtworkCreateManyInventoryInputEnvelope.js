"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateManyInventoryInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateManyInventoryInput_1 = require("../inputs/ArtworkCreateManyInventoryInput");
let ArtworkCreateManyInventoryInputEnvelope = class ArtworkCreateManyInventoryInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkCreateManyInventoryInput_1.ArtworkCreateManyInventoryInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkCreateManyInventoryInputEnvelope.prototype, "data", void 0);
ArtworkCreateManyInventoryInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateManyInventoryInputEnvelope", {
        isAbstract: true
    })
], ArtworkCreateManyInventoryInputEnvelope);
exports.ArtworkCreateManyInventoryInputEnvelope = ArtworkCreateManyInventoryInputEnvelope;
