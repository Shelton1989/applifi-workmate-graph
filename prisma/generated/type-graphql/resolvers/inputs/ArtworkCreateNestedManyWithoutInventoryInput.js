"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateNestedManyWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateManyInventoryInputEnvelope_1 = require("../inputs/ArtworkCreateManyInventoryInputEnvelope");
const ArtworkCreateOrConnectWithoutInventoryInput_1 = require("../inputs/ArtworkCreateOrConnectWithoutInventoryInput");
const ArtworkCreateWithoutInventoryInput_1 = require("../inputs/ArtworkCreateWithoutInventoryInput");
const ArtworkWhereUniqueInput_1 = require("../inputs/ArtworkWhereUniqueInput");
let ArtworkCreateNestedManyWithoutInventoryInput = class ArtworkCreateNestedManyWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkCreateWithoutInventoryInput_1.ArtworkCreateWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkCreateNestedManyWithoutInventoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkCreateOrConnectWithoutInventoryInput_1.ArtworkCreateOrConnectWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkCreateNestedManyWithoutInventoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateManyInventoryInputEnvelope_1.ArtworkCreateManyInventoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateManyInventoryInputEnvelope_1.ArtworkCreateManyInventoryInputEnvelope)
], ArtworkCreateNestedManyWithoutInventoryInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkCreateNestedManyWithoutInventoryInput.prototype, "connect", void 0);
ArtworkCreateNestedManyWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateNestedManyWithoutInventoryInput", {
        isAbstract: true
    })
], ArtworkCreateNestedManyWithoutInventoryInput);
exports.ArtworkCreateNestedManyWithoutInventoryInput = ArtworkCreateNestedManyWithoutInventoryInput;
