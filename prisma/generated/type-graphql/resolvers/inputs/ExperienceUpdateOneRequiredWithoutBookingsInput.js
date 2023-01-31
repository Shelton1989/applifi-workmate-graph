"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateOneRequiredWithoutBookingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutBookingsInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutBookingsInput");
const ExperienceCreateWithoutBookingsInput_1 = require("../inputs/ExperienceCreateWithoutBookingsInput");
const ExperienceUpdateWithoutBookingsInput_1 = require("../inputs/ExperienceUpdateWithoutBookingsInput");
const ExperienceUpsertWithoutBookingsInput_1 = require("../inputs/ExperienceUpsertWithoutBookingsInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpdateOneRequiredWithoutBookingsInput = class ExperienceUpdateOneRequiredWithoutBookingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutBookingsInput_1.ExperienceCreateWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutBookingsInput_1.ExperienceCreateWithoutBookingsInput)
], ExperienceUpdateOneRequiredWithoutBookingsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutBookingsInput_1.ExperienceCreateOrConnectWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutBookingsInput_1.ExperienceCreateOrConnectWithoutBookingsInput)
], ExperienceUpdateOneRequiredWithoutBookingsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpsertWithoutBookingsInput_1.ExperienceUpsertWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpsertWithoutBookingsInput_1.ExperienceUpsertWithoutBookingsInput)
], ExperienceUpdateOneRequiredWithoutBookingsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceUpdateOneRequiredWithoutBookingsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutBookingsInput_1.ExperienceUpdateWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutBookingsInput_1.ExperienceUpdateWithoutBookingsInput)
], ExperienceUpdateOneRequiredWithoutBookingsInput.prototype, "update", void 0);
ExperienceUpdateOneRequiredWithoutBookingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateOneRequiredWithoutBookingsInput", {
        isAbstract: true
    })
], ExperienceUpdateOneRequiredWithoutBookingsInput);
exports.ExperienceUpdateOneRequiredWithoutBookingsInput = ExperienceUpdateOneRequiredWithoutBookingsInput;
