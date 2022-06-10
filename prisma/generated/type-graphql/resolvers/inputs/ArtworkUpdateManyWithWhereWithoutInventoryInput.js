"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpdateManyWithWhereWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkScalarWhereInput_1 = require("../inputs/ArtworkScalarWhereInput");
const ArtworkUpdateManyMutationInput_1 = require("../inputs/ArtworkUpdateManyMutationInput");
let ArtworkUpdateManyWithWhereWithoutInventoryInput = class ArtworkUpdateManyWithWhereWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkScalarWhereInput_1.ArtworkScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkScalarWhereInput_1.ArtworkScalarWhereInput)
], ArtworkUpdateManyWithWhereWithoutInventoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateManyMutationInput_1.ArtworkUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateManyMutationInput_1.ArtworkUpdateManyMutationInput)
], ArtworkUpdateManyWithWhereWithoutInventoryInput.prototype, "data", void 0);
ArtworkUpdateManyWithWhereWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpdateManyWithWhereWithoutInventoryInput", {
        isAbstract: true
    })
], ArtworkUpdateManyWithWhereWithoutInventoryInput);
exports.ArtworkUpdateManyWithWhereWithoutInventoryInput = ArtworkUpdateManyWithWhereWithoutInventoryInput;
