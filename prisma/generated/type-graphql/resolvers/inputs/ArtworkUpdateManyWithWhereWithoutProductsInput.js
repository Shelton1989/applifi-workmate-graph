"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpdateManyWithWhereWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkScalarWhereInput_1 = require("../inputs/ArtworkScalarWhereInput");
const ArtworkUpdateManyMutationInput_1 = require("../inputs/ArtworkUpdateManyMutationInput");
let ArtworkUpdateManyWithWhereWithoutProductsInput = class ArtworkUpdateManyWithWhereWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkScalarWhereInput_1.ArtworkScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkScalarWhereInput_1.ArtworkScalarWhereInput)
], ArtworkUpdateManyWithWhereWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateManyMutationInput_1.ArtworkUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateManyMutationInput_1.ArtworkUpdateManyMutationInput)
], ArtworkUpdateManyWithWhereWithoutProductsInput.prototype, "data", void 0);
ArtworkUpdateManyWithWhereWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpdateManyWithWhereWithoutProductsInput", {
        isAbstract: true
    })
], ArtworkUpdateManyWithWhereWithoutProductsInput);
exports.ArtworkUpdateManyWithWhereWithoutProductsInput = ArtworkUpdateManyWithWhereWithoutProductsInput;
