"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductUpdateManyWithWhereWithoutBrandInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductScalarWhereInput_1 = require("../inputs/BrandProductScalarWhereInput");
const BrandProductUpdateManyMutationInput_1 = require("../inputs/BrandProductUpdateManyMutationInput");
let BrandProductUpdateManyWithWhereWithoutBrandInput = class BrandProductUpdateManyWithWhereWithoutBrandInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductScalarWhereInput_1.BrandProductScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductScalarWhereInput_1.BrandProductScalarWhereInput)
], BrandProductUpdateManyWithWhereWithoutBrandInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpdateManyMutationInput_1.BrandProductUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductUpdateManyMutationInput_1.BrandProductUpdateManyMutationInput)
], BrandProductUpdateManyWithWhereWithoutBrandInput.prototype, "data", void 0);
BrandProductUpdateManyWithWhereWithoutBrandInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductUpdateManyWithWhereWithoutBrandInput", {
        isAbstract: true
    })
], BrandProductUpdateManyWithWhereWithoutBrandInput);
exports.BrandProductUpdateManyWithWhereWithoutBrandInput = BrandProductUpdateManyWithWhereWithoutBrandInput;
