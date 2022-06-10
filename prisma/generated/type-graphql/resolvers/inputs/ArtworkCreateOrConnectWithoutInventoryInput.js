"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateOrConnectWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateWithoutInventoryInput_1 = require("../inputs/ArtworkCreateWithoutInventoryInput");
const ArtworkWhereUniqueInput_1 = require("../inputs/ArtworkWhereUniqueInput");
let ArtworkCreateOrConnectWithoutInventoryInput = class ArtworkCreateOrConnectWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], ArtworkCreateOrConnectWithoutInventoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateWithoutInventoryInput_1.ArtworkCreateWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkCreateWithoutInventoryInput_1.ArtworkCreateWithoutInventoryInput)
], ArtworkCreateOrConnectWithoutInventoryInput.prototype, "create", void 0);
ArtworkCreateOrConnectWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateOrConnectWithoutInventoryInput", {
        isAbstract: true
    })
], ArtworkCreateOrConnectWithoutInventoryInput);
exports.ArtworkCreateOrConnectWithoutInventoryInput = ArtworkCreateOrConnectWithoutInventoryInput;
