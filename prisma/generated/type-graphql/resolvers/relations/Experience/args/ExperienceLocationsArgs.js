"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceLocationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationOrderByWithRelationInput_1 = require("../../../inputs/LocationOrderByWithRelationInput");
const LocationWhereInput_1 = require("../../../inputs/LocationWhereInput");
const LocationWhereUniqueInput_1 = require("../../../inputs/LocationWhereUniqueInput");
const LocationScalarFieldEnum_1 = require("../../../../enums/LocationScalarFieldEnum");
let ExperienceLocationsArgs = class ExperienceLocationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereInput_1.LocationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationWhereInput_1.LocationWhereInput)
], ExperienceLocationsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationOrderByWithRelationInput_1.LocationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceLocationsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], ExperienceLocationsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceLocationsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceLocationsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationScalarFieldEnum_1.LocationScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceLocationsArgs.prototype, "distinct", void 0);
ExperienceLocationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ExperienceLocationsArgs);
exports.ExperienceLocationsArgs = ExperienceLocationsArgs;
