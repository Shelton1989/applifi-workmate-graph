"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpdateManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateOrConnectWithoutProductsInput_1 = require("../inputs/ArtworkCreateOrConnectWithoutProductsInput");
const ArtworkCreateWithoutProductsInput_1 = require("../inputs/ArtworkCreateWithoutProductsInput");
const ArtworkScalarWhereInput_1 = require("../inputs/ArtworkScalarWhereInput");
const ArtworkUpdateManyWithWhereWithoutProductsInput_1 = require("../inputs/ArtworkUpdateManyWithWhereWithoutProductsInput");
const ArtworkUpdateWithWhereUniqueWithoutProductsInput_1 = require("../inputs/ArtworkUpdateWithWhereUniqueWithoutProductsInput");
const ArtworkUpsertWithWhereUniqueWithoutProductsInput_1 = require("../inputs/ArtworkUpsertWithWhereUniqueWithoutProductsInput");
const ArtworkWhereUniqueInput_1 = require("../inputs/ArtworkWhereUniqueInput");
let ArtworkUpdateManyWithoutProductsInput = class ArtworkUpdateManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkCreateWithoutProductsInput_1.ArtworkCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkCreateOrConnectWithoutProductsInput_1.ArtworkCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkUpsertWithWhereUniqueWithoutProductsInput_1.ArtworkUpsertWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutProductsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutProductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutProductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkUpdateWithWhereUniqueWithoutProductsInput_1.ArtworkUpdateWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkUpdateManyWithWhereWithoutProductsInput_1.ArtworkUpdateManyWithWhereWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutProductsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkScalarWhereInput_1.ArtworkScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkUpdateManyWithoutProductsInput.prototype, "deleteMany", void 0);
ArtworkUpdateManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpdateManyWithoutProductsInput", {
        isAbstract: true
    })
], ArtworkUpdateManyWithoutProductsInput);
exports.ArtworkUpdateManyWithoutProductsInput = ArtworkUpdateManyWithoutProductsInput;
