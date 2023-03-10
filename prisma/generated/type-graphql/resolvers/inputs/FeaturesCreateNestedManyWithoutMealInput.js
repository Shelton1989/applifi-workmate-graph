"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesCreateNestedManyWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCreateManyMealInputEnvelope_1 = require("../inputs/FeaturesCreateManyMealInputEnvelope");
const FeaturesCreateOrConnectWithoutMealInput_1 = require("../inputs/FeaturesCreateOrConnectWithoutMealInput");
const FeaturesCreateWithoutMealInput_1 = require("../inputs/FeaturesCreateWithoutMealInput");
const FeaturesWhereUniqueInput_1 = require("../inputs/FeaturesWhereUniqueInput");
let FeaturesCreateNestedManyWithoutMealInput = class FeaturesCreateNestedManyWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesCreateWithoutMealInput_1.FeaturesCreateWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesCreateNestedManyWithoutMealInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesCreateOrConnectWithoutMealInput_1.FeaturesCreateOrConnectWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesCreateNestedManyWithoutMealInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateManyMealInputEnvelope_1.FeaturesCreateManyMealInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesCreateManyMealInputEnvelope_1.FeaturesCreateManyMealInputEnvelope)
], FeaturesCreateNestedManyWithoutMealInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesCreateNestedManyWithoutMealInput.prototype, "connect", void 0);
FeaturesCreateNestedManyWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesCreateNestedManyWithoutMealInput", {
        isAbstract: true
    })
], FeaturesCreateNestedManyWithoutMealInput);
exports.FeaturesCreateNestedManyWithoutMealInput = FeaturesCreateNestedManyWithoutMealInput;
