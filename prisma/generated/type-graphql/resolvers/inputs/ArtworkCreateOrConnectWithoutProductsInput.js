"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateWithoutProductsInput_1 = require("../inputs/ArtworkCreateWithoutProductsInput");
const ArtworkWhereUniqueInput_1 = require("../inputs/ArtworkWhereUniqueInput");
let ArtworkCreateOrConnectWithoutProductsInput = class ArtworkCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], ArtworkCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateWithoutProductsInput_1.ArtworkCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkCreateWithoutProductsInput_1.ArtworkCreateWithoutProductsInput)
], ArtworkCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
ArtworkCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], ArtworkCreateOrConnectWithoutProductsInput);
exports.ArtworkCreateOrConnectWithoutProductsInput = ArtworkCreateOrConnectWithoutProductsInput;
