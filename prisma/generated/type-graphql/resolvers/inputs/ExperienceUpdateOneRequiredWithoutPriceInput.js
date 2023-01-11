"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateOneRequiredWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutPriceInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutPriceInput");
const ExperienceCreateWithoutPriceInput_1 = require("../inputs/ExperienceCreateWithoutPriceInput");
const ExperienceUpdateWithoutPriceInput_1 = require("../inputs/ExperienceUpdateWithoutPriceInput");
const ExperienceUpsertWithoutPriceInput_1 = require("../inputs/ExperienceUpsertWithoutPriceInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpdateOneRequiredWithoutPriceInput = class ExperienceUpdateOneRequiredWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutPriceInput_1.ExperienceCreateWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutPriceInput_1.ExperienceCreateWithoutPriceInput)
], ExperienceUpdateOneRequiredWithoutPriceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutPriceInput_1.ExperienceCreateOrConnectWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutPriceInput_1.ExperienceCreateOrConnectWithoutPriceInput)
], ExperienceUpdateOneRequiredWithoutPriceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpsertWithoutPriceInput_1.ExperienceUpsertWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpsertWithoutPriceInput_1.ExperienceUpsertWithoutPriceInput)
], ExperienceUpdateOneRequiredWithoutPriceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceUpdateOneRequiredWithoutPriceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutPriceInput_1.ExperienceUpdateWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutPriceInput_1.ExperienceUpdateWithoutPriceInput)
], ExperienceUpdateOneRequiredWithoutPriceInput.prototype, "update", void 0);
ExperienceUpdateOneRequiredWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateOneRequiredWithoutPriceInput", {
        isAbstract: true
    })
], ExperienceUpdateOneRequiredWithoutPriceInput);
exports.ExperienceUpdateOneRequiredWithoutPriceInput = ExperienceUpdateOneRequiredWithoutPriceInput;
