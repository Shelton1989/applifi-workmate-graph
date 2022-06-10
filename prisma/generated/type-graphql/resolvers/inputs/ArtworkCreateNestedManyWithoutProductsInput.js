"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateNestedManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateOrConnectWithoutProductsInput_1 = require("../inputs/ArtworkCreateOrConnectWithoutProductsInput");
const ArtworkCreateWithoutProductsInput_1 = require("../inputs/ArtworkCreateWithoutProductsInput");
const ArtworkWhereUniqueInput_1 = require("../inputs/ArtworkWhereUniqueInput");
let ArtworkCreateNestedManyWithoutProductsInput = class ArtworkCreateNestedManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkCreateWithoutProductsInput_1.ArtworkCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkCreateOrConnectWithoutProductsInput_1.ArtworkCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
ArtworkCreateNestedManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateNestedManyWithoutProductsInput", {
        isAbstract: true
    })
], ArtworkCreateNestedManyWithoutProductsInput);
exports.ArtworkCreateNestedManyWithoutProductsInput = ArtworkCreateNestedManyWithoutProductsInput;
